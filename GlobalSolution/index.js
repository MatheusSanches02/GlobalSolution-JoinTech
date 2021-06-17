window.addEventListener("message", onModal, false);
function onModal(event) {
    var data = event.data;
    if (typeof(window[data.func]) == "function") {
        window[data.func].call(null, data.message);
    }
    
    switch (data["func"]) {
        case 'showModalComments':
            this.removeHide('modal-comments');
            break;
        case 'hideModalComments':
            this.addHide('modal-comments');
            break;
        case 'showModalInfos':
            this.removeHide('modal-infos');
            document.getElementById('title-info').innerHTML = data['title'];
            document.getElementById('value-info').innerHTML = data['message'];
            break;
        case 'hideModalInfos':
            this.addHide('modal-infos');
            break;
    }
}

function setRouter(_numberOptions)
{
    switch (_numberOptions) 
    {
        case 0:
            this.setItemActive('home');
            this.removeItemActive(['restaurant', 'parks', 'party']);
            break;
        case 1:
            this.setItemActive('restaurant');
            this.removeItemActive(['home', 'parks', 'party']);
            break;
        case 2:
            this.setItemActive('parks');
            this.removeItemActive(['home', 'restaurant', 'party']);
            break;
        case 3:
            this.setItemActive('party');
            this.removeItemActive(['home', 'parks', 'restaurant']);
            break;
    }
}

function setItemActive(_item)
{
    document.getElementById(_item + '-tag').classList.add('active');
    document.getElementById('routers').src = './src/pages/' + _item + '/' + _item + '.html';
}

function removeItemActive(_items)
{
    for (const item of _items)
    {
        document.getElementById(item + '-tag').classList.remove('active');
    }
}

function addHide(_id)
{
    document.getElementById(_id).classList.add('hide');
}

function removeHide(_id)
{
    document.getElementById(_id).classList.remove('hide');
}

function sendComments() {
    alert('Avalicação realizada com sucesso.');
    this.addHide('modal-comments');
}