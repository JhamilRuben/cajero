var x=document.getElementById("clave");
var canti=document.getElementById("cant");
var saldo=1000;

function numero(n){
    var s=x.value;
    x.value=s+n;
    return s;
}
function cantidad(n){
    var cant_final=canti.value;
    canti.value=cant_final+n;
    return cant_final;
}
class Usuario{
    constructor(clave){
        this.clave = clave;
    };
    validar(){
        
        var x; 
        if(this.clave=='12345678'){
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
            l.style.display = 'none';
            m.style.display = 'block';
            
        }
    }
};
function ok2(){
    var men1=document.getElementById("mensaje1");
    var men2=document.getElementById("mensaje2");
    var men3=document.getElementById("mensaje3");
    var l=cantidad();
    if(l%10==0){
         saldo=saldo-l;
         men1.style.display = 'none';
         men2.style.display = 'block';
         alert(saldo);
    }else{
        men1.style.display = 'none';
        men3.style.display = 'block';
    }
    
};


function primero_menu(){
        var m = document.getElementById("menu_botones");
        var r = document.getElementById("retiro");
        if (m.style.display == 'block'){
            m.style.display = 'none';
            r.style.display = 'block';
        }
    
    
};

function primero_retiro(){
    var r = document.getElementById("retiro");
    var rs = document.getElementById("retiro_soles");
    if (r.style.display == 'block'){
        r.style.display = 'none';
        rs.style.display = 'block';
    }


};

function septimo_retiro_soles(){
    var rs = document.getElementById("retiro_soles");
    var o = document.getElementById("otras_cantidades");
    var n = document.getElementById("abajo_izquierda_uno");
    var c = document.getElementById("abajo_izquierda_dos");
    if (rs.style.display == 'block'){
        rs.style.display = 'none';
        o.style.display = 'block';
        n.style.display = 'none';
        c.style.display = 'block';
    }


};

function sexto_otras_cantidades(){
    var o = document.getElementById("otras_cantidades");
    var t = document.getElementById("transaccion");
    if (o.style.display == 'block'){
        o.style.display = 'none';
        t.style.display = 'block';
        
    }


};
function octavo_transaccion(){
    var t = document.getElementById("transaccion");
    var g = document.getElementById("gracias");
    if (t.style.display == 'block'){
        t.style.display = 'none';
        g.style.display = 'block';
    }


};