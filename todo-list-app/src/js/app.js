/**
 * Todo list teste Quality
 */

//Importa o css para estilização do app
import '../css/app.css';

const App = {

    /*
    * Função que inicializa o app
    * @method init
    */
    init: () => {
        App.listaTarefas();
        App.showAddTarefa();
        App.addNewTarefa();
        App.filterListConcluidos();
        App.filterListPendentes();
        App.filterListAll();
    },

    /*
    * Função que exibe a url da api de acordo com o parametro
    * @method apiURL
    * @param id recebe um valor false ou um valor inteiro referente ao id da tarefa
    */
    apiURL: (id) => {
        return (id != false) ? 
             `http://localhost/quero-ser-quality/todo-list-api/public/api/tarefas/${id}` : 
             'http://localhost/quero-ser-quality/todo-list-api/public/api/tarefas';
    },

    /*
    * Função que monta as tarefas
    * @method listaTarefas
    */
    listaTarefas: () => {
        fetch(App.apiURL(false))
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then((data) => {
                            let item = '';
                            data.forEach(obj => {
                                item += `
                                <div class="col" data-id="${obj.id}" data-status="${obj.status != 'pendente' ? '1' : '0' }">
                                    <div class="content">
                                        <header class="header">
                                            <input class="status" type="checkbox"${obj.status != 'pendente' ? ' checked' : '' }>
                                            <h3 class="subtitle">${obj.titulo}</h3>
                                            <span class="remove"><i class="far fa-trash-alt"></i></span>
                                        </header>
                                        <div class="desc">
                                            <span>${obj.descricao}</span>
                                        </div>
                                    </div>
                                </div>`;
                            });
                            let list = document.querySelector('.listagem .row');
                            list.innerHTML = item;
                            App.showDescTarefa();
                            App.updateStatusTarefa();
                            App.deleteTarefa();
                        })
                }
            });
    },

    /*
    * Função que exibe o formulário para adiconar uma nova tarefa
    * @method showAddTarefa
    */
    showAddTarefa: () => {
        let btn = document.querySelector('.add-tarefa');
        let body = document.querySelector('body');
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            if( ! body.classList.contains('show-add') ){
                body.className = 'show-add';
            }
            else {
                body.classList.remove('show-add');
            }
        });
    },

    /*
    * Função que exibe uma descrição de uma tarefa
    * @method showDescTarefa
    */
    showDescTarefa: () => {
        let elem = document.querySelectorAll('.listagem .subtitle');
        let all = document.querySelectorAll('.listagem .col');
        for (let el of elem) {
            el.addEventListener('click', (event) => {
                let content = el.parentElement.parentElement.parentElement;                

                if( ! content.classList.contains('show') ){    
                    for(let al of all){
                        al.classList.remove('show');
                    }                                           
                    content.className += ' show';
                }
                else {
                    content.classList.remove('show');
                }
            });
        }
    },

    /*
    * Função que adiciona uma tarefa
    * @method addNewTarefa
    */
    addNewTarefa: () => {
        let submit = document.querySelector('.nova-tarefa .form');
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            let title = document.querySelector('#titulo');
            let desc = document.querySelector('#descricao');
            let msg = document.querySelector('.nova-tarefa .msg');

            submit.setAttribute('disabled', 'disabled');

            if( title.value == '' || desc.value == '' ){                    
                msg.innerHTML = '<span class="alert alert-error text-center">Ops! todos o campos precisa ser preenchidos</span>';
                setTimeout(() => {
                    msg.innerHTML = '';
                    submit.removeAttribute('disabled');
                }, 6000);
            }
            else {
                let fetchHeaders = new Headers();
                fetchHeaders.append('Content-Type', 'application/json');
                let fetchOptions = {
                    method: 'POST',
                    headers: fetchHeaders,
                    body: JSON.stringify({
                        'titulo': title.value,
                        'descricao': desc.value,
                        'status': 'pendente'
                    })
                };
                fetch(App.apiURL(false), fetchOptions)
                    .then((response) => {
                        if(response.ok){
                            return response.json()
                                .then((response) => {
                                    App.listaTarefas();
                                    msg.innerHTML = '<span class="alert alert-success text-center">Tarefa inserida com sucesso.</span>';
                                    submit.removeAttribute('disabled');
                                    title.value = '';
                                    desc.value = '';
                                    setTimeout(() => {
                                        msg.innerHTML = '';
                                        let body = document.querySelector('body');
                                        body.classList.remove('show-add');
                                    }, 1000);
                                })
                        }
                    });
            }
        }); 
    },

    /*
    * Função que atualiza o status da tarefa
    * @method updateStatusTarefa
    */
    updateStatusTarefa: () => {
        let input = document.querySelectorAll('.listagem .status');
        for(let  inp of input){
            inp.addEventListener('change', (event) => {
                let item = inp.parentElement.parentElement.parentElement;
                let status = item.getAttribute('data-status');
                let id = item.getAttribute('data-id');
                if(event.target.checked) {
                    item.setAttribute('data-status', '1');
                }
                else {
                    item.setAttribute('data-status', '0');
                }
                let fetchHeaders = new Headers();
                fetchHeaders.append('Content-Type', 'application/json');
                let fetchOptions = {
                    method: 'PUT',
                    headers: fetchHeaders,
                    body: JSON.stringify({
                        'status': status == '0' ? 'concluído' : 'pendente'
                    })
                };
                fetch(App.apiURL(id), fetchOptions)
                
            });
        }
    },

    /*
    * Função que apaga uma tarefa
    * @method deleteTarefa
    */
    deleteTarefa: () => {
        let input = document.querySelectorAll('.listagem .remove');
        for(let  inp of input){
            inp.addEventListener('click', (event) => {
                let item = inp.parentElement.parentElement.parentElement;
                let id = item.getAttribute('data-id');

                item.classList = item.classList + ' remove-item';   
                
                let fetchHeaders = new Headers();
                fetchHeaders.append('Content-Type', 'application/json');
                let fetchOptions = {
                    method: 'DELETE',
                    headers: fetchHeaders,
                    body: JSON.stringify({
                        'id': id
                    })
                };
                fetch(App.apiURL(id), fetchOptions)
                    .then((response) => {
                        if(response.ok){
                            return response.json()
                                .then((response) => {
                                   item.remove();
                                })
                        }
                    });
            });
        }
    },

    /*
    * Função que filtra as tarefas concluídas
    * @method filterListConcluidos
    */
    filterListConcluidos: () => {
        let btn = document.querySelector('.complete-tarefa');
        
        btn.addEventListener('click', (event) => {
            event.preventDefault();

            let elementList = document.querySelector('.listagem');
            let list = document.querySelectorAll('.listagem .col:not([data-status="1"]');
            let allList = document.querySelectorAll('.listagem .col');

            elementList.classList = elementList.classList +' hide-session';                

            setTimeout(() => {
                elementList.classList.remove('hide-session');
                allList.forEach((list) => {
                    list.classList.remove('hide');
                });
                
                list.forEach((item) => {
                    item.className = item.classList + ' hide';
                });
            }, 800);
        });
    },

    /*
    * Função que filtra as tarefas pendentes
    * @method filterListPendentes
    */
    filterListPendentes: () => {
        let btn = document.querySelector('.active-tarefa');
        btn.addEventListener('click', (event) => {
            event.preventDefault();

            let elementList = document.querySelector('.listagem');
            let list = document.querySelectorAll('.listagem .col:not([data-status="0"]');                
            let allList = document.querySelectorAll('.listagem .col');

            elementList.classList = elementList.classList +' hide-session';

            setTimeout(() => {
                elementList.classList.remove('hide-session');
                allList.forEach((list) => {
                    list.classList.remove('hide');
                });

                list.forEach((item) => {
                    item.className = item.classList + ' hide';
                });
            }, 800);

        });
    },

    /*
    * Função que exibe todas as tarefas
    * @method filterListAll
    */
    filterListAll: () => {
        let btn = document.querySelector('.all-tarefa');
        btn.addEventListener('click', (event) => {
            event.preventDefault();
           
            let elementList = document.querySelector('.listagem');
            let allList = document.querySelectorAll('.listagem .col');

            elementList.classList = elementList.classList +' hide-session';

            setTimeout(() => {
                elementList.classList.remove('hide-session');
                allList.forEach((list) => {
                    list.classList.remove('hide');
                });
            }, 800);

        });
    }

}

const app = App;
app.init();