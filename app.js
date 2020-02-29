let product_list = ['Laptop', 'KeyBoard', 'Mouse', 'Screen'];

function table_create() {
    let html = '';
    for (let i = 1; i <= product_list.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += i;
        html += '</td>';
        html += '<td name="product_name">';
        html += product_list[i - 1];
        html += '</td>';
        html += '<td name="action">';
        html += '<input name="delete_button" id="' + (i - 1) + '" value="Delete" type="button" onclick="detele_product(this.id)">&nbsp';
        html += '<input name="repair_button" id="' + (i - 1) + '" value="Repair" type="button" onclick="repair_product(this.id)">';
        html += '</td>';
        html += '</tr>';
    }
    document.getElementById('table_body').innerHTML = html;
}

table_create();

function add_product() {
    let to_add_product = document.getElementById('product_information').value;
    product_list.push(to_add_product);
    table_create()
}

function detele_product(to_delete_product) {
    let confirm_resut;
    confirm_resut = confirm('Ban that su muon xoa "' + product_list[to_delete_product] + '" khoi danh sach san pham ?');
    if (confirm_resut === true) {
        product_list.splice(to_delete_product, 1);
        table_create();
    }
}

function repair_product(to_repair_product){
    let change_content = prompt('Nhap vao Ten san pham Sau khi thay doi');
    let confirm_resut;
    confirm_resut = confirm('Ban that su muon thay doi "' + product_list[to_repair_product] + '" thanh "'+change_content+'" ?');
    if (confirm_resut === true) {
        product_list.splice(to_repair_product, 1, change_content);
        table_create();
    }
}