var x=document.getElementById("clave");

function numero(n){
    alert("nu");
    var s=x.value;
    x.value=s+n;
    return s;
}
class Usuario{
    constructor(clave){
        this.clave = clave;
    };
    validar(){
        var x; 
        if(this.clave=='123'){
            x = 1;
        }else{
            x = 0;
        }
        return x;
    };
};

function ok(){
    var u = new Usuario(
        numero()
    )
    if(u.validar()==1){
        var l = document.getElementById("login_botones");
        var m = document.getElementById("menu_botones");
        if (l.style.display == 'block'){
            alert(hola);
            l.style.display = 'none';
            m.style.display = 'block';
        }
    }
    
}

function primero_(){
        var m = document.getElementById("menu_botones");
        var r = document.getElementById("retiro");
        if (m.style.display == 'block'){
            m.style.display = 'none';
            r.style.display = 'block';
        }
    }
    
}