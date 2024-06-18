<?php

$name =   $_REQUEST['name'] ;
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $typeObject = $_REQUEST['answer_step_1'];
    $services = $_REQUEST['answer_step_2'];
    $documents = $_REQUEST['answer_step_3'];
    $visualizationPremises = $_REQUEST['answer_step_4'];
    $squareMeters = $_REQUEST['answer_step_5'];
    $desc = $_REQUEST['modal_desc'];
    $file = & $_FILES['modal_file'];
    $DI = $_REQUEST['DI'];
    $DOC = $_REQUEST['DOC'];
    $threeD = $_REQUEST['threeD'];
    $AK = $_REQUEST['AK'];
    $sumDI = $_REQUEST['sumDI'];
    $SUM = $_REQUEST['SUM'];
    $EP = $_REQUEST['EP'];
    $AR = $_REQUEST['AR'];
    $RF = $_REQUEST['RF'];
    $AP = $_REQUEST['AP'];
    $RS = $_REQUEST['RS'];
    $response = '';


    $msg = "
        <div>Здравствуйте, Александр!</div>
        <div>Меня зовут {$name}.</div>
    ";


    $isSupport = true;
    $isArchitecture = true;
    $isAgreement = true;
    $isInterior = true;
    $servicesMag = '';


    $isSketch = true;
    $isArcSolutions = true;
    $isRelatedSections = true;


    if ($typeObject == 'flat') {
        $msg .= "
            <div>Мне нужно разработать дизайн квартиры.</div>
            <div>Мне потребуется:</div>";

            if ($isInterior) {
                $msg .="
                    <div>Дизайн интерьера общей стоимостью {$DI}р.:</div>
                    <div>— Документация {$DOC}р.</div>
                    <div>— 3D визуализация с визуализацией " . ($visualizationPremises === 'mainPremises' ? 'основных' : 'всех') . " помещений {$threeD}р.</div>
                ";
            }

            if ($isAgreement) {
                $msg .= "<div>Согласование проекта {$AP}р.</div>";
            }
            if ($isSupport) {
                $msg .= "<div>Авторское сопровождение/Комплектация объекта {$AK}р.</div>";
            }
            $msg .= "<div>" . $servicesMag . "</div>
            <div>Суммарно {$sumDI} ($$)</div>
            <br>
            <div>Метраж объекта: {$squareMeters} м2</div>
        ";
    } elseif ($typeObject == 'house' || $typeObject == 'office') {
        $msg .= "
            <div>Мне нужно разработать дизайн " . ($typeObject === 'house' ? 'частного дом' : 'офиса') . ".</div>
            <div>Мне потребуется:</div>";
            if ($isInterior) {
                $msg .= "
                    <div>Дизайн интерьера общей стоимостью {$DI}р.:</div>
                    <div>— Документация {$DOC}р.</div>
                    <div>— 3D визуализация с визуализацией " . ($visualizationPremises === 'mainPremises' ? 'основных' : 'всех') . " помещений {$threeD}р.</div>
                ";
            }
            if ($isArchitecture) {
                $msg .= "<div>Архитектурное проектирование:</div>
                    <div>— Эскизный проект {$EP}р.</div>";
                if ($isArcSolutions) {
                    $msg .= "<div>— Архитектурные решения {$AR}р.</div>";
                }
                if ($isRelatedSections) {
                    $msg .= "<div>— Смежные разделы {$RS}р.</div>";
                }
             //   $msg .="<div>— Реконструкция фасада {$RF}р.</div>";
            }
            if ($isAgreement) {
                $msg .= "<div>Согласование проекта {$AP}р.</div>";
            }
            if ($isSupport) {
                $msg .= "<div>Авторское сопровождение/Комплектация объекта {$AK}р.</div>";
            }
            $msg .= "<div>" . $servicesMag . "</div>
            <div>Суммарно {$SUM} ($$)</div>
            <br>
            <div>Метраж объекта: {$squareMeters} м2</div>
        ";
    } else {
        $msg .= "
            <div>Я ищу специалиста для своего проекта в сфере Horeca.</div>
        ";
    }

    $msg .= "
        <div>Детальное описание:</div>
        <div>{$desc}</div>
        <div>Телефон: {$phone}</div>
        <div>Email: {$email}</div>
        <div>Буду ждать Вашего звонка. С уважением, {$name}!</div>
    ";

    $sub = " Расчет стоимости объекта: ".$name ;

    require 'PHPMailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->SetLanguage("ru","phpmailer/language");
    $mail->setFrom('  i-project.by/@by119.activeby.net', 'Дизайн интерьера');
    $mail->addAddress('iproject.aleksandr@gmail.com', 'iproject.aleksandr@gmail.com');
    $mail->addAddress('info.yellowpine@gmail.com', 'info.yellowpine@gmail.com');
    $mail->msgHTML($msg);
        // Attach uploaded files
    $mail->addAttachment($file['tmp_name'] , $file['name'] , 'base64' , $file['type'] );
    $mail->Subject =  $sub;
// Отправляем почтовое сообщение
    if(    $mail->send()){
                echo $mail->Subject;
    } else {
        $response = 'Ошибка при отправке';
    }

?>













