
       /* function validaEmail() {
            let ver = document.querySelector('.txtEmail')
          
            let ter =  fCadastro.nome.value;
          
            if (!ver.value.includes("@")) {
                alert("email invalido")
            }
         else if (ter.value == " ") {
                alert("Campo nome é obrigatório");
                fCadastro.ter.focus();
                return false
             
            }
        }
   */
        function validar(){
            let nome = formuser.nome.value;
            let email = formuser.email.value;
           let senha = formuser.senha.value;
            
           let pdf = document.querySelector('.nome').innerHTML,
            pdf2 = document.querySelector('.email').innerHTML;
           
            let  janela = window.open('','',' width=1800,height=1600');
            janela.document.write("<html><head>");
            janela.document.write("<title>PDF</title></head>");
            janela.document.write("<body>"+pdf + pdf2);
            janela.document.write("</body>");
            janela.document.write(pdf);
            janela.document.write("</body></html>");
            janela.document.close();
            janela.print();
           
            if(nome == ""){
                alert('Preencha o campo nome.');
                formuser.nome.focus();
                return false;
            }
            
            if(email == "" || email.indexOf('@') == -1 ){
                alert('Preencha o campo E-mail.');
                formuser.email.focus();
                return false;
            }
            
            if(senha == "" || senha.length <= 5){
                alert('Preencha o campo senha com minimo 6 caracteres');
                formuser.senha.focus();
                return false;
            }
          
        }
      
       