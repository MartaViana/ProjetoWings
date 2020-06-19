<?php

//echo $_POST['email'];
//echo $_POST['name'];
//echo $_POST['message'];

    $filename = 'contactos.txt';
    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $message = trim(stripslashes($_POST['message']));
    $message = wordwrap($message,70);

    // Check Name
    if (strlen($name) < 2) {
        $error['name'] = "Please enter your name.";
    }
    // Check Email
    if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
        $error['email'] = "Please enter a valid email address.";
    }
    // Check Message
    if (strlen($message) < 1) {
        $error['message'] = "Please enter your message.";
    }
 if (!$error) {

         fileOutputForm($name, $email, $filename);
         $statusToClient = mail( $email, "Confirmaçao de mensagem", "A sua mensagem foi recebia com sucesso. Vamos responder em breve.");
         $statusToAdmin = mail("1112marta@gmail.com", "Mensagem nova", "Recebeu uma nova mensagem de: " . $name .  "\r\nMensagem: " . $message);
         if ($statusToClient == 1 ) echo "Vai receber dentro de momentos um email de confirmação." ;
            else echo "Erro ao enviar o seu email de confirmação.";
         if ($statusToAdmin == 1 ) echo null;
             else echo "Erro ao enviar a sua mensagem para o administrador.";
}

    else {

        $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
        $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
        $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;

        echo $response;
    }

    function fileOutputForm($name, $email, $filename){
    $line_to_write = $name . ', ' . $email . ', ' . $_POST["message"] . "\n" ;
    file_put_contents($filename, $line_to_write, FILE_APPEND);
}