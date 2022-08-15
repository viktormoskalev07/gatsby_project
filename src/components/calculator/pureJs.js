import { API_PROD } from "../../../API"

export const pureJs = ({dollarRate,backFunc})=>{



        let area;
     function getParameterByName(name, url = window.location.href) {
       name = name.replace(/[\[\]]/g, '\\$&');
       var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
         results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, ' '));
     }

     function prettify (num) {
       const n = num.toString();
       const separator = '&thinsp;';
       return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
     }

      const loader = document.querySelector('.loader');
     loader.style.display='none'
     const modalBlock = document.querySelector('#modal');
     const htmlHidden = document.getElementsByTagName('html')[0];

     const stepOne = document.querySelectorAll('.modal_step1_item');
     const questionTitle = document.querySelector('#question');
     const formAnswers = document.querySelector('#formAnswers');
     const nextButton = document.querySelector('#nextButton');
     const sendButton = document.querySelector('#sendButton');
     const backButton = document.querySelector('.js-modal-back');
     const stepNumbers = document.querySelector('#stepNumbers');
     const modalSidebarLine = document.querySelector('.modal_sidebar_line');
     const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

     //калькулятор
     const calc = (type, isAllPremises ) => {
       const resultBYN = document.querySelector('.modal_step5_result_rub');
       const resultUSD = document.querySelector('.modal_step5_result_usd');
       const list = document.querySelector('.modal_step5_list');
       const isInterior = document.querySelector('#interior')?.checked;
       const isSketch = document.querySelector('#sketch')?.checked;
       const isArcSolutions = document.querySelector('#arc_solutions')?.checked;
       const isRelatedSections = document.querySelector('#related_sections')?.checked;
       const isArchitecture = document.querySelector('#architecture')?.checked;
       const isSupport = document.querySelector('#support')?.checked;
       const isAgreement = document.querySelector('#agreement')?.checked;

       let DOC;
       let DI;
       let threeD;
       let AK;
       let AP;
       let sumDI;
       area = document.querySelector('#area');
       //квартиры
       if (type === 'flat') {
         if (isAllPremises) {
           //все помещения
           if (area.value < 85) {
             DOC = 0;
             threeD = 0;
             AK = 0;
           }
           if (area.value >= 85) {
             DOC = 100 * 25 * dollarRate;
             threeD = DOC * 0.8;
             AK = (DOC + threeD) * 0.5;
           }
           if (area.value > 100) {
             DOC = area.value * 25 * dollarRate;
             threeD = DOC * 0.8;
             AK = (DOC + threeD) * 0.5;
           }
           if (area.value >= 200) {
             DOC = area.value * 20 * dollarRate;
             threeD = DOC * 0.8;
             AK = (DOC + threeD) * 0.4;
           }
           if (area.value >= 400) {
             DOC = area.value * 15 * dollarRate;
             threeD = DOC * 0.8;
             AK = (DOC + threeD) * 0.3;
           }
           if (area.value >= 600) {
             DOC = area.value * 10 * dollarRate;
             threeD = DOC * 0.8;
             AK = (DOC + threeD) * 0.2;
           }
         } else {
           //основные помещения
           if (area.value < 85) {
             DOC = 0;
             threeD = 0;
             AK = 0;
           }
           if (area.value >= 85) {
             DOC = 100 * 25 * dollarRate;
             threeD = DOC * 0.5;
             AK = (DOC + threeD) * 0.5;
           }
           if (area.value > 100) {
             DOC = area.value * 25 * dollarRate;
             threeD = DOC * 0.5;
             AK = (DOC + threeD) * 0.5;
           }
           if (area.value >= 200) {
             DOC = area.value * 20 * dollarRate;
             threeD = DOC * 0.4;
             AK = (DOC + threeD) * 0.4;
           }
           if (area.value >= 400) {
             DOC = area.value * 15 * dollarRate;
             threeD = DOC * 0.3;
             AK = (DOC + threeD) * 0.3;
           }
           if (area.value >= 600) {
             DOC = area.value * 10 * dollarRate;
             threeD = DOC * 0.2;
             AK = (DOC + threeD) * 0.2;
           }
         }
         AP = 1000 * dollarRate;
         DI = DOC + threeD;
         sumDI = DI;

         let html = '';
         html += '<li class="modal_step5_li">Дизайн проект ' + Math.round(DOC) + ' р.</li>';
         html += '<li class="modal_step5_li">3D–визуализация интерьера ' + Math.round(threeD) + ' р.</li>';
         html += '<li class="modal_step5_li">Контроль за подрядчиками</li>';
         if (isAgreement) {
           html += '<li class="modal_step5_li">Согласование проекта ' + Math.round(AP) + ' р.</li>';
           sumDI += AP;
         }
         if (isSupport) {
           html += '<li class="modal_step5_li">Авторское сопровождение/Комплектация объекта ' + Math.round(AK) + ' р.</li>';
           sumDI += AK;
         }

         list.innerHTML = html;

         const sumBYN = Math.round(sumDI / 100) * 100
         resultBYN.innerHTML = prettify(sumBYN) + " р.";
         resultUSD.innerHTML = '$' + prettify(Math.round((sumDI / dollarRate) / 100) * 100)
       }


       let RF;
       let EP;
       let AR;
       let SUM;
       let AKd;
       let AKp;
       let RS = Math.round(2500 * dollarRate);

       // дома и офисы
       if (type === 'house' || type === 'office') {

         if (isAllPremises) {
           //все помещения
           if (area.value < 150) {
             DOC = 0;
             threeD = 0;
             EP = 0;
             AR = 0;
           }
           if (area.value >= 150) {
             DOC = 200 * 20 * dollarRate;
             threeD = DOC * 0.8;
             EP = 3000 * dollarRate;
             AR = 3000 * dollarRate;
             AKp = (EP + AR) * 0.5;
             AKd = (DOC + threeD) * 0.5;
           }
           if (area.value > 200) {
             DOC = area.value * 20 * dollarRate;
             threeD = DOC * 0.8;
             EP = 3500 * dollarRate;
             AR = 3500 * dollarRate;
             AKp = (EP + AR) * 0.4;
             AKd = (DOC + threeD) * 0.4;
           }
           if (area.value >= 400) {
             DOC = area.value * 15 * dollarRate;
             threeD = DOC * 0.8;
             EP = 4000 * dollarRate;
             AR = 4000 * dollarRate;
             AKp = (EP + AR) * 0.3;
             AKd = (DOC + threeD) * 0.3;
           }
           if (area.value >= 600) {
             DOC = area.value * 10 * dollarRate;
             threeD = DOC * 0.8;
             EP = 4500 * dollarRate;
             AR = 4500 * dollarRate;
             AKp = (EP + AR) * 0.2;
             AKd = (DOC + threeD) * 0.2;
           }
         } else {
           //основные помещения
           if (area.value < 150) {
             DOC = 0;
             threeD = 0;
             EP = 0;
             AR = 0;
           }
           if (area.value >= 150) {
             DOC = 200 * 20 * dollarRate;
             threeD = DOC * 0.5;
             EP = 3000 * dollarRate;
             AR = 3000 * dollarRate;
             AKp = (EP + AR) * 0.5;
             AKd = (DOC + threeD) * 0.5;
           }
           if (area.value > 200) {
             DOC = area.value * 20 * dollarRate;
             threeD = DOC * 0.4;
             EP = 3500 * dollarRate;
             AR = 3500 * dollarRate;
             AKp = (EP + AR) * 0.4;
             AKd = (DOC + threeD) * 0.4;
           }
           if (area.value >= 400) {
             DOC = area.value * 15 * dollarRate;
             threeD = DOC * 0.3;
             EP = 4000 * dollarRate;
             AR = 4000 * dollarRate;
             AKp = (EP + AR) * 0.3;
             AKd = (DOC + threeD) * 0.3;
           }
           if (area.value >= 600) {
             DOC = area.value * 10 * dollarRate;
             threeD = DOC * 0.2;
             EP = 4500 * dollarRate;
             AR = 4500 * dollarRate;
             AKp = (EP + AR) * 0.2;
             AKd = (DOC + threeD) * 0.2;
           }
         }
         AP = 1000 * dollarRate;
         RF = EP * 0.66;
         DI = DOC + threeD;
         if (isInterior && isSupport) {
           AK = AKd;
         }
         if (isArchitecture && isSupport) {
           AK = 0;
         }
         if (isInterior && isArchitecture && isSupport) {
           AK = AKd;
         }
         if (isArchitecture && isArcSolutions && isSupport) {
           AK = AKp;
         }
         if (isInterior && isArchitecture && isArcSolutions && isSupport) {
           AK = AKd + AKp;
         }

         SUM = 0;

         let html = '';
         if (isInterior) {
           html += '<li class="modal_step5_li">Дизайн проект ' + Math.round(DOC) + ' р.</li>';
           html += '<li class="modal_step5_li">3D–визуализация интерьера ' + Math.round(threeD) + ' р.</li>';
           SUM += DI;
         }
         if (isSketch) {
           html += '<li class="modal_step5_li">Эскизный проект (архитектура) ' + Math.round(EP) + ' р.</li>';
           SUM += EP;
         }
         if (isArcSolutions) {
           html += '<li class="modal_step5_li">Архитектурные решения ' + Math.round(AR) + ' р.</li>';
           SUM += AR;
         }
         if (isRelatedSections) {
           html += '<li class="modal_step5_li">Смежные разделы ' + RS + ' р.</li>';
           SUM += RS;
         }
         if (isArchitecture) {
           // html += '<li class="modal_step5_li">Реконструкция фасада ' + Math.round(RF) + ' р.</li>';
           // SUM += RF;
         }
         if (isAgreement) {
           html += '<li class="modal_step5_li">Согласование проекта ' + Math.round(AP) + ' р.</li>';
           SUM += AP;
         }
         if (isInterior) {
           html += '<li class="modal_step5_li">Контроль за подрядчиками</li>';
         }

         if (isSupport) {
           html += '<li class="modal_step5_li">Авторское сопровождение/Комплектация объекта ' + Math.round(AK) + ' р.</li>';
           SUM += AK;
         }

         list.innerHTML =  html;

         const sumBYN = Math.round(SUM / 100) * 100;
         resultBYN.innerHTML = prettify(sumBYN) + " р.";
         resultUSD.innerHTML = '$' + prettify(Math.round((SUM / dollarRate) / 100) * 100)
       }

       return {
         DI: Math.round(DI),
         DOC: Math.round(DOC),
         threeD: Math.round(threeD),
         AK: Math.round(AK),
         SUM: Math.round((SUM / dollarRate) / 100) * 100,
         sumDI: Math.round((sumDI / dollarRate) / 100) * 100,
         EP: Math.round(EP),
         AR: Math.round(AR),
         RF: Math.round(RF),
         AP: Math.round(AP),
         RS,
       }
     };

     // Объект, содержащий вопросы и ответы
     const questions = [
       {
         question: "Какой у вас тип объекта?",
         answers: [
           {
             title: 'Квартира и&nbsp;апартаменты',
             svg: '<svg class="modal_step1_icon_apart" width="152" height="142" viewBox="0 0 152 142" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1 18.4V0H17.4V18.4C6.5 20.2 0 31.8 0 41.6V50H2.5H5H35.4H38H40.5V41.5C40.5 31.8 34 20.2 23.1 18.4ZM35.5 45.1H5.1V41.5C5.1 33.3 10.5 23.3 20.3 23.3C30.1 23.3 35.5 33.3 35.5 41.5V45.1Z" fill="#D6D6D6"/><path d="M62.6999 86.1001C60.5999 86.1001 58.8999 87.8001 58.8999 89.9001C58.8999 92.0001 60.5999 93.7001 62.6999 93.7001C64.7999 93.7001 66.4999 92.0001 66.4999 89.9001C66.4999 87.7001 64.7999 86.1001 62.6999 86.1001Z" fill="#D6D6D6"/><path d="M80.5002 86.1001C78.4002 86.1001 76.7002 87.8001 76.7002 89.9001C76.7002 92.0001 78.4002 93.7001 80.5002 93.7001C82.6002 93.7001 84.3002 92.0001 84.3002 89.9001C84.2002 87.7001 82.6002 86.1001 80.5002 86.1001Z" fill="#D6D6D6"/><path d="M113.2 97.1001H103.1V78.0001C103.1 68.7001 95.4999 61.1001 86.1999 61.1001H55.9999C46.6999 61.1001 39.0999 68.7001 39.0999 78.0001V97.1001H28.9999C25.8999 97.1001 23.3999 99.6001 23.3999 102.7V119.6C23.3999 124.6 25.8999 129 29.5999 131.8V142H34.4999V134C35.7999 134.3 37.0999 134.5 38.3999 134.5H103.8C105.4 134.5 106.9 134.3 108.4 133.8V142H113.3V131.2C116.7 128.4 118.9 124.2 118.9 119.5V102.6C118.9 99.6001 116.3 97.1001 113.2 97.1001ZM44.6999 78.0001C44.6999 71.8001 49.6999 66.7001 55.9999 66.7001H86.2999C92.4999 66.7001 97.5999 71.7001 97.5999 78.0001V112.8H44.6999V78.0001ZM38.3999 128.9C33.1999 128.9 28.9999 124.7 28.9999 119.5V102.6H39.0999V116.5C39.0999 117.5 39.8999 118.4 40.9999 118.4H101.3C102.3 118.4 103.2 117.6 103.2 116.5V102.6H113.3V119.5C113.3 124.7 109.1 128.9 103.9 128.9H38.3999Z" fill="#D6D6D6"/><path d="M76.8998 27.8C73.2998 27.8 70.2998 30.7001 70.2998 34.4001V62.3H75.8998V34.4001C75.8998 33.9001 76.2998 33.5 76.7998 33.5H108.7V97.4001H114.3V27.8H76.8998Z" fill="#D6D6D6"/><path d="M145.4 33.5999C145.9 33.5999 146.3 33.9999 146.3 34.4999V140.2H151.9V34.4999C151.9 30.8999 149 27.8999 145.3 27.8999H108.7H108.6V33.4999H108.7L145.4 33.5999Z" fill="#D6D6D6"/><path d="M123.6 89.3C122.5 89.3 121.6 88.4 121.6 87.3V71.3C121.6 70.2 122.5 69.3 123.6 69.3C124.7 69.3 125.6 70.2 125.6 71.3V87.2C125.6 88.4 124.8 89.3 123.6 89.3Z" fill="#D6D6D6"/></svg>',
             id: 'flat',
             steps: [0, 1, 3, 4, 5, 6],
           },
           {
             title: 'Частный дом',
             svg: '<svg class="modal_step1_icon_house" width="131" height="119" viewBox="0 0 131 119" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M124.255 0H109.18C105.458 0 102.435 3.03593 102.435 6.77404V22.5939L20.6885 0.908712L19.1462 6.75338L35.7217 11.1524V47.4596L6.90989 56.2989C2.26217 57.6619 0 59.7685 0 63.5272V112.205C0 115.943 3.02308 118.979 6.74537 118.979H9.68619H35.7217H41.7473H124.008H124.255C127.977 118.979 131 115.943 131 112.205V6.77404C131 3.03593 127.977 0 124.255 0ZM109.18 6.77404H124.255V28.3973L109.18 24.3907V6.77404ZM6.74537 112.205V63.6305C7.05385 63.4446 7.6708 63.1555 8.86358 62.8044L34.9813 54.7912V112.226H9.68619H6.74537V112.205ZM88.3685 87.6081V88.4962V112.205H69.7364V88.9299V87.6081V85.357H72.2865H72.9035H84.4611H85.8389H88.389V87.6081H88.3685ZM124.255 112.205H124.008H109.18H102.435H94.4969V81.4743C94.4969 80.2352 93.3658 79.2232 91.9468 79.2232H66.1992C64.8008 79.2232 63.6491 80.2352 63.6491 81.4743V112.205H41.7473V54.4814V12.7633L124.255 34.6756V99.8551V112.205Z" fill="#D6D6D6"/></svg>',
             id: 'house',
             steps: [0, 1, 2, 3, 4, 5, 6],
           },
           {
             title: 'Офис, салон',
             svg: '<svg class="modal_step1_icon_office" width="133" height="112" viewBox="0 0 133 112" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M127.808 38.9422H125.418L127.045 28.2991C127.045 25.5145 125.191 23.2663 122.925 23.2663H109.058C106.791 23.2663 104.937 25.5145 104.937 28.2991L106.544 38.9422H90.6584V16.5009C90.6584 7.38416 83.2821 0 74.1751 0H61.7919C52.6849 0 45.3086 7.38416 45.3086 16.5009V38.9422H10.5287L16.4421 24.1532H40.9199V17.4291C40.9199 10.3337 36.9845 2.12449 30.3912 0.660037C30.3912 0.660037 29.4228 0.453775 28.3101 0.453775C27.0327 0.453775 26.2291 0.660037 26.2291 0.660037C21.6756 1.67072 18.3789 5.91971 16.7924 10.8081L5.54253 38.9422H5.19225C2.24586 39.4166 0 41.9536 0 45.0475V56.1856C0 59.6096 2.76096 62.3735 6.18126 62.3735H11.1469V112H17.3281V105.812V95.1897V62.3529H45.288V64.8692C45.288 70.5621 49.9033 75.1823 55.5901 75.1823H64.7796V93.1271H59.237C51.6547 93.1271 45.7207 97.6648 45.7207 103.44C45.7207 105.152 47.1012 106.534 48.8113 106.534C50.5215 106.534 51.9019 105.152 51.9019 103.44C51.9019 101.501 55.0338 99.3149 59.237 99.3149H78.3783C81.7986 99.3149 83.9827 101.048 83.9827 102.223C83.9827 103.935 85.3631 105.317 87.0733 105.317C88.7834 105.317 90.1639 103.935 90.1639 102.223C90.1639 97.1079 84.9923 93.1271 78.3783 93.1271H71.0844V75.1823H78.2959C85.1159 75.1823 90.6584 69.6339 90.6584 62.8066V62.3529H115.363V95.1691V105.792V111.979H121.544V62.3529H126.839C130.26 62.3529 133.021 59.589 133.021 56.165V45.0269C133 41.9536 130.754 39.4166 127.808 38.9422ZM28.3308 5.03278C33.4612 5.03278 36.3046 12.3551 36.3046 17.4085V19.4917H20.3569V17.4291C20.3569 15.8615 20.6248 14.1083 21.1399 12.3963L21.3047 12.0044H21.2841C22.4998 8.31234 24.9105 5.03278 28.3308 5.03278ZM109.079 28.0722C109.12 27.7215 109.223 27.4947 109.305 27.3915H122.677C122.76 27.5153 122.883 27.7422 122.904 28.0722L121.235 38.9628H110.706L109.079 28.0722ZM51.4692 36.8177V33.5588V16.5009C51.4692 10.8081 56.0846 6.18785 61.7713 6.18785H74.1751C79.8618 6.18785 84.4771 10.8081 84.4771 16.5009V33.5588V36.8177V38.9628H51.4692V36.8177ZM84.2299 64.0236C84.2093 64.0855 84.1887 64.6424 84.1681 64.7042C83.3645 67.2 81.0363 69.0151 78.2753 69.0151H55.5901C53.3236 69.0151 51.4692 67.1587 51.4692 64.8899V64.5186V62.3735H84.2299V64.0236ZM126.819 56.165H6.18126V45.0269H107.471H124.49H126.839V56.165H126.819Z" fill="#D6D6D6"/></g><defs><clipPath id="clip0"><rect width="133" height="112" fill="white"/></clipPath></defs></svg>',
             id: 'office',
             steps: [0, 1, 2, 4, 5, 6],
           },
           {
             title: 'Ретейл, HoReCa',
             svg: '<svg class="modal_step1_icon_retail" width="131" height="114" viewBox="0 0 131 114" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M65.5006 94.4708C84.9173 94.4708 100.73 78.6387 100.73 59.1513C100.709 39.7057 84.8965 23.8527 65.5006 23.8318C46.084 23.8318 30.2715 39.664 30.2715 59.1513C30.2715 78.6387 46.084 94.4708 65.5006 94.4708ZM35.8548 59.1722C35.8548 42.7761 49.1465 29.4503 65.5006 29.4503C81.8548 29.4503 95.1465 42.7761 95.1465 59.1722C95.1256 75.5474 81.834 88.8732 65.5006 88.8941C49.1465 88.8941 35.8548 75.5474 35.8548 59.1722Z" fill="#D6D6D6"/><path d="M128.208 0.00121933H123.875C112.812 0.0221061 103.791 9.04519 103.791 20.1361V23.1229C94.604 13.3061 82.2498 7.4578 68.7915 6.60144C54.8331 5.7242 41.3956 10.3193 30.8956 19.5304L29.8123 2.59118C29.7081 1.04556 28.3331 -0.103215 26.8331 0.00121933C25.3331 0.105653 24.1665 1.42152 24.2498 2.94625L25.6248 24.2299C24.6456 24.7729 22.2915 25.6293 18.5623 25.9217V2.80005C18.5415 1.25443 17.2915 0.00121933 15.7706 0.00121933C14.2498 0.00121933 12.979 1.25443 12.979 2.80005V25.9008C9.60396 25.6293 7.06229 24.8774 5.91646 24.209L7.24979 2.96714C7.29146 2.21522 7.04146 1.50507 6.54146 0.941124C6.04146 0.377181 5.37479 0.0638796 4.62479 0.0221061C3.12479 -0.0405542 1.79146 1.10822 1.68729 2.61207L0.0206225 28.9294C-0.291878 34.2764 3.45812 39.0595 8.64562 40.0829V60.7817C7.41646 61.0741 6.47896 62.1811 6.47896 63.497V104.686C6.47896 109.803 10.6456 113.98 15.7498 113.98C20.8748 113.98 25.0206 109.803 25.0206 104.686V92.7385C33.5415 103.077 45.4581 109.678 58.7915 111.39C72.7081 113.166 86.4998 109.427 97.604 100.822C103.812 96.0177 108.896 89.8143 112.437 82.7964V104.686C112.437 109.803 116.604 113.98 121.708 113.98C126.812 113.98 130.979 109.803 130.979 104.686V2.80005C131 1.25443 129.75 0.00121933 128.208 0.00121933ZM14.229 60.6982V40.2709H17.2915V60.6982H14.229ZM19.4581 66.2958V104.686C19.4581 106.733 17.7915 108.404 15.7498 108.404C13.7081 108.404 12.0415 106.733 12.0415 104.686V66.2958H19.4581ZM22.8748 60.7817V40.0829C28.0623 39.0595 31.8331 34.2555 31.4998 28.9085L31.3748 26.8407C39.9165 17.7759 51.4581 12.5542 63.8956 12.1155C76.3956 11.6978 88.3748 16.1676 97.5415 24.752C99.854 26.9243 101.979 29.3471 103.812 31.9371V63.497C103.812 65.0426 105.062 66.2958 106.604 66.2958H111.937C110.333 76.8228 105.166 86.556 97.354 93.7828C78.3123 111.369 48.5623 110.158 30.9998 91.0675C28.7498 88.6029 26.7498 85.9085 25.0623 83.047V63.497C25.0415 62.1811 24.104 61.0533 22.8748 60.7817ZM25.9165 30.1617C25.7915 31.2061 25.354 32.1877 24.6456 32.9814C23.729 34.0049 22.479 34.6106 21.1248 34.6733H10.7081C8.08312 34.6733 5.91646 32.689 5.62479 30.1408C8.35396 31.0807 11.8331 31.582 15.7706 31.582C19.6248 31.6029 23.1873 31.1016 25.9165 30.1617ZM125.416 5.59887V60.7191H109.375V20.1361C109.375 12.1155 115.896 5.59887 123.896 5.57799H125.416V5.59887ZM118.021 66.2958H125.416V104.686C125.416 106.733 123.75 108.404 121.708 108.404C119.666 108.404 118 106.733 118 104.686V66.2958H118.021Z" fill="#D6D6D6"/></g><defs><clipPath id="clip0"><rect width="131" height="114" fill="white"/></clipPath></defs></svg>',
             id: 'retail',
             steps: [0, 5, 6],
           }
         ],
         type: 'radio'
       },
       {
         question: "Какие услуги вас интересуют?",
         answers: [
           {
             title: 'Дизайн интерьера',
             label: 'interior',
             flatChecked: true,
             flatRequired: true,
             houseChecked: true,
             houseRequired: true,
             officeChecked: true,
             officeRequired: true,
           },
           {
             title: 'Авторское сопровождение и&nbsp;комплектация',
             label: 'support',
             // flatChecked: true,
             // houseChecked: true,
             // officeChecked: true,
           },
           {
             title: 'Согласование проекта',
             label: 'agreement',
             // flatChecked: true,
             // houseChecked: true,
             // officeChecked: true,
           },
           {
             title: 'Архитектурное проектирование',
             label: 'architecture',
             flatDisabled: true,
             officeRequired: true,
             houseRequired: true,
             // houseChecked: true,
             // officeChecked: true,
           },
           {
             title: 'Строительство и&nbsp;реконструкция',
             label: 'reconst',
           },
           {
             title: 'Ландшафтный дизайн',
             label: 'landscape',
             flatDisabled: true,
           }
         ],
         type: 'checkbox'
       },
       {
         question: "Какой объем документов вам нужен?",
         answers: [
           {
             title: 'Эскизный проект',
             text: 'Основной пакет документов с&nbsp;архитектурно планировочными концепциями помещений, фасада и&nbsp;участка.',
             label: 'sketch',
             hiddenText: '1. Ведомость чертежей<br>2. Архитектурно планировочная концепция: Планы этажей с&nbsp;расстановкой мебели и&nbsp;оборудования. 3D-визуализация фасада здания<br>3.Чертежи фасадов здания в&nbsp;массах с&nbsp;нанесением основных размеров<br>4. Цветовое решение фасада здания<br>5. Планировочная схема участка<br><span class="modal_step3_list_span">Общий объем: 15&ndash;20 листов&nbsp;А3</span>',
             button: 'Обязательно',
             buttonActive: 'Обязательно',
             required: true
           },
           {
             title: 'Архитектурные решения',
             text: 'Фотореалистичная 3D-визуализации с&nbsp;детализацией материалов, цветов и&nbsp;фактур. План здания, кровли, схемы водосточной системы и&nbsp;облицовки фасада.',
             label: 'arc_solutions',
             hiddenText: '1. Общие данные<br>2. Ситуационный план<br>3. План здания<br>4. Укрупненные фрагменты необходимых участков плана здания<br>5. План кровли<br>6. Схема водосточной системы<br>7. Необходимые укрупненные фрагменты и&nbsp;узлы кровли<br>8. Чертежи фасада здания подробные<br>9. Укрупненные фрагменты и&nbsp;узлы необходимых участков фасада здания<br>10. Схема облицовки фасада<br>11. Спецификация заполнения оконных проемов, схемы окон<br>12. Спецификация заполнения дверных проемов, схемы дверей<br>13. Паспорт цветового решения фасада здания<br>14. Ведомость наружной отделки<br>15. Фотореалистичная 3D-визуализации с&nbsp;детализацией материалов, цветов и&nbsp;фактур.<br><span class="modal_step3_list_span">Общий объем: 50&ndash;100 листов А3, А2</span>',
             button: 'Добавить',
             buttonActive: 'Добавлено',
             required: false
           },
           {
             title: 'Смежные разделы',
             text: 'Конструктивные решения, cхемы водопровода, канализации, отопления, вентиляции (контроль за&nbsp;подрядчиками)',
             label: 'related_sections',
             hiddenText: '1. Конструктивные решения (КР)<br><span class="modal_step3_list_span">Общий объем: 50-100 листов формата А2, А3, А4</span><br>2. Отопление и&nbsp;вентиляция (ОВ)<br>3. Водопровод и&nbsp;канализация (ВК)<br>4. Электричество и&nbsp;автоматизация (ЭО + &laquo;Умный Дом&raquo;)<br>5. Инженерная геодезия (топосъемка)<br>6. Инженерная геология (бурение скважин, анализ грунта)<br><span class="modal_step3_list_span">Общий объем: 50-100 листов формата А2, А3, А4</span>',
             button: 'Добавить',
             buttonActive: 'Добавлено',
             required: false
           }
         ],
         type: 'checkbox'
       },
       {
         question: "Визуализация каких помещений нужна?",
         answers: [
           {
             title: 'Основных помещений',
             flatText: '3&ndash;5 ракурсов на&nbsp;одно помещение: прихожая, гостиная, кухня, столовая, спальня.',
             houseText: '3&ndash;5 ракурсов на&nbsp;одно помещение: прихожая, гостиная, кухня, столовая, жилые комнаты (спальни хозяйские и&nbsp;детские).',
             button: 'Выбрать',
             buttonActive: 'Выбрано',
             checked: true,
             id: 'mainPremises',
           },
           {
             title: 'Всех помещений',
             flatText: '3&ndash;5 ракурсов на&nbsp;одно помещение: основные помещения, детские комнаты, гостевые, кабинеты, коридоры, лестницы, санузлы и&nbsp;т.п.',
             houseText: '3&ndash;5 ракурсов на&nbsp;одно помещение: основные помещения, коридоры, лестницы, холлы, кабинеты, гостевые комнаты, лаундж зоны, спа зоны, бассейны, санузлы и&nbsp;т.п.',
             button: 'Выбрать',
             buttonActive: 'Выбрано',
             checked: false,
             id: 'allPremises',
           }
         ],
         type: 'radio'
       },
       {
         question: "Расчет стоимости",
         answers: [],
       },
       {
         question: "Особенности вашего объекта",
         answers: [],
       },
       {
         question: "Контактная информация",
         answers: [],
       },
     ];

// Функция запуска тестирования
     function playTest   ()   {
       formAnswers.innerHTML = '';

       let numberQuestion = 0;
       let backNumberQuestionArr = [];
       // Массив шагов
       let steps = [];

       let objectType = '';
       let isAllPremises = false;

       let minValue = 10;
       let minObj = 75;

       let calcDI = 0;
       let calcDOC = 0;
       let calcThreeD = 0;
       let calcAK = 0;
       let calcSUM = 0;
       let calcSumDI = 0;
       let calcEP = 0;
       let calcAR = 0;
       let calcRF = 0;
       let calcAP = 0;
       let calcRS = 0;

       // Функция рендеринга ответов
       const renderAnswers = (index) => {
         const stepNumber = document.createElement('div');
         stepNumber.classList.add('js-step-body');
         formAnswers.append(stepNumber);

         // шаг 1
         if (numberQuestion === 0) {
           questions[index].answers.forEach((answer) => {
             const answerItem = document.createElement('label');
             answerItem.setAttribute('for', answer.id);

             const Input = document.createElement('input');
             Input.classList.add('input_step_1')
             Input.type = questions[index].type
             Input.name = "answer_step_1"
             Input.id = answer.id
             Input.value = answer.id

             Input.onchange = (e) => {
               steps = answer.steps;
               objectType = answer.id;
               onNextStep();
             }
             stepNumber.classList.add('modal_body1', 'modal_step1');
             answerItem.classList.add('modal_step1_item');
             answerItem.innerHTML = `
                        <h2 class="modal_step1_title">${answer.title}</h2>
                        <div class="modal_step1_icon_svg">${answer.svg}</div>
                    `;

             answerItem.append(Input)
             stepNumber.append(answerItem);
           })

         }

         // шаг 2
         if (steps[numberQuestion] === 1) {
           const requiredItems = questions[index].answers.filter(item =>  !item[`${objectType}Disabled`] && item[`${objectType}Required`])

           questions[index].answers.forEach((answer) => {
             const isChecked = answer[`${objectType}Checked`];
             const isRequired = answer[`${objectType}Required`];
             const isDisabled = answer[`${objectType}Disabled`];

             if (isDisabled) return;

             const answerItem = document.createElement('label');
             answerItem.setAttribute('for', answer.label);
             stepNumber.classList.add('modal_body2', 'modal_step2');
             answerItem.classList.add('modal_step2_item');

             const Input = document.createElement('input');
             Input.classList.add('modal_step_checkbox');
             Input.type = questions[index].type;
             Input.name = "answer_step_2[]";
             Input.id = answer.label;
             Input.value = answer.label;

             if (isChecked || (isRequired && requiredItems.length < 2)) {
               Input.checked = true
               answerItem.classList.add('_checked')
             }

             if (isRequired && requiredItems.length < 2) {
               Input.disabled = true
             }

             Input.onchange = (e) => {
               if (e.target.checked) {
                 answerItem.classList.add('_checked')
               } else {
                 answerItem.classList.remove('_checked')
               }
               const inputs = stepNumber.querySelectorAll('.modal_step_checkbox')
               for (let [i, input] of inputs.entries()) {
                 if (requiredItems.some(item => item.label === input.value) && input.checked) {
                   nextButton.classList.remove('d-none');
                   break
                 }
                 if (i === inputs.length - 1) {
                   nextButton.classList.add('d-none');
                 }
               }
             }

             answerItem.innerHTML = `
                        <span class="modal_step2_name">${answer.title}</span>
                        <input name="${answer.label}" value="${answer.title}" style="display: none">
                    `;

             answerItem.prepend(Input);
             stepNumber.append(answerItem);
           })

         }

         // шаг 3
         if (steps[numberQuestion] === 2) {
           questions[index].answers.forEach((answer) => {
             const isChecked = answer.required || answer.checked;

             const answerItem = document.createElement('label');
             answerItem.setAttribute('for', answer.label);
             stepNumber.classList.add('modal_body3', 'modal_step3');
             answerItem.classList.add('modal_step3_item');

             const Input = document.createElement('input');
             Input.classList.add('input_step_3')
             Input.type = questions[index].type
             Input.name = "answer_step_3[]"
             Input.id = answer.label
             Input.value = answer.label

             const Button = document.createElement('div');
             Button.classList.add('modal_step3_button');
             Button.innerHTML = answer.button

             if (isChecked) {
               Input.checked = true
               Button.innerHTML = answer.buttonActive
               answerItem.classList.add('_checked')
             }
             if (answer.required) {
               Input.disabled = true
             }

             Input.onchange = (e) => {
               if (e.target.checked) {
                 answerItem.classList.add('_checked')
                 Button.innerHTML = answer.buttonActive
               } else {
                 answerItem.classList.remove('_checked')
                 Button.innerHTML = answer.button
               }
             }

             answerItem.innerHTML = `
                        <div class="modal_step3_body">
                          <h4 class="modal_step3_title">${answer.title}</h4>
                          <p class="modal_step3_text">${answer.text}</p>
                          <div class="modal_step3_list">
                          <p class="modal_step3_list_p">Список документов</p>
                          <p class="modal_step3_list_hidden_p">${answer.hiddenText}</p>
                          </div>
                        </div>
                    `;

             answerItem.append(Input);
             answerItem.append(Button);
             stepNumber.append(answerItem);
           })

         }

         // шаг 4
         if (steps[numberQuestion] === 3) {
           questions[index].answers.forEach((answer) => {
             const isChecked = answer.checked

             const answerItem = document.createElement('label');
             answerItem.setAttribute('for', answer.id);
             stepNumber.classList.add('modal_body4', 'modal_step4');
             answerItem.classList.add('modal_step4_item');

             const Input = document.createElement('input');
             Input.classList.add('input_step_4');
             Input.type = questions[index].type;
             Input.name = "answer_step_4";
             Input.id = answer.id;
             Input.value = answer.id;

             const Button = document.createElement('div');
             Button.classList.add('modal_step4_button');
             Button.innerHTML = answer.button;

             if (isChecked) {
               Input.checked = true
               Button.innerHTML = answer.buttonActive
               answerItem.classList.add('_checked');
             }

             Input.onchange = (e) => {
               if (e.target.checked) {
                 stepNumber.querySelectorAll('.modal_step4_item').forEach(el => {
                   el.classList.remove('_checked');
                   el.querySelector('.modal_step4_button').innerHTML = answer.button;
                 })
                 answerItem.classList.add('_checked');
                 Button.innerHTML = answer.buttonActive;

                 if (e.target.id === 'allPremises') {
                   isAllPremises = true
                 } else {
                   isAllPremises = false
                 }


               }
             }

             answerItem.innerHTML = `
                        <div class="modal_step4_body">
                          <h4 class="modal_step4_title">${answer.title}</h4>
                          <p class="modal_step4_text">${answer[`${objectType}Text`] || answer.text}</p>
                        </div>
                    `;

             answerItem.append(Input);
             answerItem.append(Button);
             stepNumber.append(answerItem);
           })
         }

         // шаг 5
         if (steps[numberQuestion] === 4) {
           const answerItem = document.createElement('div');
           stepNumber.classList.add('modal_body5', 'modal_step5');
           answerItem.classList.add('modal_step5_item');

           const main = `
                    <div class="modal_step5_anim">
                        <div class="modal_step5_result_main">
                          <div class="modal_step5_result_rub">0 р.</div>
                          <div class="modal_step5_result_usd">$0</div>
                        </div>
                        <ul class="modal_step5_list">
                          <li class="modal_step5_li">Эскизный проект 0&nbsp;р.</li>
                          <li class="modal_step5_li">Архитектурные решения 0&nbsp;р.</li>
                          <li class="modal_step5_li">Контроль за&nbsp;подрядчиками</li>
                          <li class="modal_step5_li">Авторское сопровождение/Комплектация объекта 0&nbsp;р.</li>
                        </ul>
                        <p class="modal_step5_result_text">Затраты на&nbsp;строительные работы и&nbsp;смету можно будет расчитать после согласования проекта.</p>
                        <p class="modal_step5_calculate_text_mob">Чтобы узнать точную стоимость дизайн проекта заполните форму до&nbsp;конца. Мы&nbsp;пришлем вам письмо на&nbsp;почту с&nbsp;коммерческим предложением.</p>
                    </div>
                `

           stepNumber.innerHTML = `<div class="modal_step5">
                    <div class="modal_step5_calculate">
                      <h4 class="modal_step5_title">Метраж (м<sup>2</sup>)</h4>
                      <input type="number" class="modal_step5_input" id="area" name="answer_step_5" value="" onclick="ym(71004781,'reachGoal','input_calculater'); return true;">
                      <p class="modal_step5_calculate_text">Чтобы узнать точную стоимость дизайн проекта заполните форму до&nbsp;конца. Мы&nbsp;пришлем вам письмо на&nbsp;почту с&nbsp;коммерческим предложением.</p>
                    </div>
                    <div class="modal_step5_result">
                      <p class="modal_step5_start_p">Введите количество метров<br>вашего объекта</p>
                    </div>
                  </div>`

           stepNumber.querySelector('.modal_step5_input').oninput = (e) => {
             e.target.classList.remove('error');

             if (objectType === 'flat') {
               minValue = 85;
               minObj = 100
             } else if (objectType === 'house' || objectType === 'office') {
               minValue = 150;
               minObj = 200
             }

             if (+e.target.value > minValue - 1 && +e.target.value < 1000) {
               stepNumber.querySelector('.modal_step5_result').innerHTML = main;
               const { DI, DOC, threeD, AK, SUM, sumDI, EP, AR, RF, AP, RS } = calc(objectType, isAllPremises );
               calcDI = DI;
               calcDOC = DOC;
               calcThreeD = threeD;
               calcAK = AK;
               calcSUM = SUM;
               calcSumDI = sumDI;
               calcEP = EP;
               calcAR = AR;
               calcRF = RF;
               calcAP = AP;
               calcRS = RS;
             } else if (+e.target.value >= 1000) {
               stepNumber.querySelector('.modal_step5_result').innerHTML = `
                            <div class="modal_step5_anim">
                                <p class="modal_step5_bp">У вас крупный объект</p>
                                <p class="modal_step5_p">Позвоните нам по телефону для уточнения стоимости</p>
                                <a class="modal_step5_tel" href="tel:+375293822550">+375 (29) 382 25 50</a>
                            </div>
                        `;

             } else if (+e.target.value > 9 && +e.target.value < minValue) {
               stepNumber.querySelector('.modal_step5_result').innerHTML = `<p class="modal_step5_sp">Мы занимается объектами от ${minObj} м<sup>2</sup></p>`;
             } else {
               stepNumber.querySelector('.modal_step5_result').innerHTML = `<p class="modal_step5_start_p">Введите количество метров<br>вашего объекта</p>`;
             }
           }

           //  stepNumber.append(answerItem);
         }

         // шаг 6
         if (steps[numberQuestion] === 5) {
           stepNumber.classList.add('modal_body6');

           stepNumber.innerHTML = `
                  <label class="modal_body6_title" for="modal_desc">Описание</label>
                  <div class="modal_step6">
                    <textarea class="modal_body6_textarea" name="modal_desc" id="modal_desc" placeholder="Место положение, особенности вашего объекта, состав семьи"></textarea>
                    <div class="modal_body6_dad">
                      <input type="file" name="modal_file" id="modal_file" class="modal_body6_dad_input">
                      <p class="modal_body6_dad_p"><label for="modal_file" class="modal_body6_dad_button">Прикрепить</label> фото или план объекта (если имеется)</p>
                      <div class="modal_body6_dad_done" style="display: none">
                        <img src="https://i-project.by/wp-content/uploads/2021/03/dddone.svg" alt="" class="modal_body6_dad_done_img">
                        <span><button class="modal_body6_dad_done_button">Удалить</button></span>
                      </div>
                    </div>
                  </div>
                `

           stepNumber.querySelector('#modal_file').onchange = (e) => {
             if (e.target.value) {
               stepNumber.querySelector('.modal_body6_dad_done').style.display = 'flex';
               stepNumber.querySelector('.modal_body6_dad_p').style.display = 'none';
               stepNumber.querySelector('#modal_file').style.display = 'none';
             }
           }

           stepNumber.querySelector('.modal_body6_dad_done_button').onclick = (e) => {
             e.preventDefault();
             stepNumber.querySelector('#modal_file').value = null;

             stepNumber.querySelector('.modal_body6_dad_done').style.display = 'none';
             stepNumber.querySelector('.modal_body6_dad_p').style.display = 'block';
             stepNumber.querySelector('#modal_file').style.display = 'block';
           }

         }

         // шаг 7
         if (steps[numberQuestion] === 6) {
           nextButton.classList.add('d-none');
           sendButton.classList.remove('d-none');
           stepNumber.classList.add('modal_body7', 'modal_step7');

           stepNumber.innerHTML = `
                    <div class="modal_body7_block">
                      <label class="modal_body7_label" for="form_name">Имя</label>
                      <input name="name" type="text" id="form_name" class="modal_body7_input">
                    </div>
                    <div class="modal_body7_block">
                      <label class="modal_body7_label" for="form_tel">Контактный телефон</label>
                      <input name="phone" type="tel" id="form_tel" class="modal_body7_input">
                    </div>
                    <div class="modal_body7_block">
                      <label class="modal_body7_label" for="form_email">Эл. почта</label>
                      <input name="email" type="email" id="form_email" class="modal_body7_input">
                    </div>
                `;

           stepNumber.querySelectorAll('input').forEach(item => {
             item.onchange = (e) => item.classList.remove('error');
           })
         }
       };

       // функция обновления элементов
       const renderElements = () => {
         modalSidebarLine.style.width = `${(numberQuestion * 100 / steps.length) || 15}%`;
         questionTitle.textContent = `${questions[numberQuestion].question}`;

         if (!steps.length || numberQuestion === 0) {
           nextButton.classList.add('d-none');
           backButton.classList.add('d-none');
         } else {
           stepNumbers.innerHTML = `${numberQuestion + 1}/${steps.length}`
           nextButton.classList.remove('d-none');
           backButton.classList.remove('d-none');
         }
       }


       //Функция рендеринга вопросов и ответов
       const renderQuestions = (indexQuestion) => {
         formAnswers.querySelectorAll('.js-step-body').forEach(el => el.classList.add('d-none'))

         if (numberQuestion >= 0 && numberQuestion <= steps.length) {
           sendButton.classList.add('d-none');
           renderElements();
           if (!steps.length || numberQuestion === 0) {
             renderAnswers(indexQuestion);
           } else {
             renderAnswers(steps[indexQuestion]);
           }

         }
       };
       //Запуск функции рендеринга
       renderQuestions(numberQuestion);

       //Обработчики событий кнопок next
       const onNextStep = () => {
          area = document.querySelector('#area');
         if (steps[numberQuestion] === 4 && area && area.value < minValue) {
           area.classList.add('error');
           return;
         }

         backNumberQuestionArr.push(numberQuestion);

         if (
           (objectType === 'house' || objectType === 'office') &&
           steps[numberQuestion] === 1 &&
           document.querySelector('#architecture') &&
           !document.querySelector('#architecture').checked
         ) {
           numberQuestion += 2;
         } else if (
           (objectType === 'house') &&
           steps[numberQuestion] === 2 &&
           document.querySelector('#interior') &&
           !document.querySelector('#interior').checked
         ) {
           numberQuestion += 2;
         } else {
           numberQuestion++;
         }

         renderQuestions(numberQuestion);
       }

       const onBackStep = () => {
         sendButton.classList.add('d-none');
         formAnswers.querySelectorAll('.js-step-body').forEach(el => el.classList.add('d-none'));
         formAnswers.querySelector(`.modal_body${steps[numberQuestion] + 1}`).remove();
         numberQuestion = backNumberQuestionArr.pop();
         formAnswers.querySelector(`.modal_body${steps[numberQuestion] + 1}`).classList.remove('d-none');
         if (numberQuestion === 0) {
           document.querySelector(`#${objectType}`).checked = false;
         }
         renderElements()
       }

       stepOne.onclick = () => {
         onNextStep()
       };

       nextButton.onclick = () => {
         onNextStep()
       };
       backButton.onclick = () => {
         onBackStep()
       };

       //функция отправки формы
       const onSubmit = () => {
         const name = formAnswers.querySelector('input[name="name"]');
         const email = formAnswers.querySelector('input[name="email"]');
         const phone = formAnswers.querySelector('input[name="phone"]');
         let isError = false;

         if (!name.value.length) {
           name.classList.add('error');
           isError = true;
         }
         if (!phone.value.length) {
           phone.classList.add('error');
           isError = true;
         }
         if (!emailRegexp.test(email.value)) {
           email.classList.add('error');
           isError = true;
         }
         if (isError) return;

         formAnswers.querySelectorAll('input[disabled]').forEach(item =>
           item.removeAttribute('disabled')
         )

         const formData = new FormData(formAnswers);
         formData.append("action", "ajax_order");
         formData.append("DI", calcDI);
         formData.append("DOC", calcDOC);
         formData.append("threeD", calcThreeD);
         formData.append("AK", calcAK);
         formData.append("SUM", calcSUM);
         formData.append("sumDI", calcSumDI);
         formData.append("EP", calcEP);
         formData.append("AR", calcAR);
         formData.append("RF", calcRF);
         formData.append("AP", calcAP);
         formData.append("RS", calcRS);
          loader.style.display='flex';
         fetch(API_PROD.calculator, {
           method: 'POST',
           body: formData,
         }).then(( ) => {

           loader.style.display='none';
           formAnswers.innerHTML = `
                <div class="modal_step_finish">
                    <p class="modal_step_finish_p">Ваше сообщение успешно отправлено. Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;рабочее время.</p>
                </div>
                `;
           // formAnswers.textContent = 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в рабочее время.';
           modalSidebarLine.style.width = '100%';
           window.removeEventListener('popstate', popstateEvent)
           const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
           const newUrl = baseUrl + '';
           window.history.pushState(null, null, newUrl);
           setTimeout(() => {

             sendButton.removeEventListener('click', onSubmit);
             backFunc();
           }, 2000);
         }).catch(err => {
           formAnswers.innerHTML = `
                <div class="modal_step_finish">
                    <p class="modal_step_finish_p">Произошла ошибка, пожалуйста, попробуйте снова.</p>
                </div>
                `;
           //formAnswers.textContent = 'Произошла ошибка, пожалуйста, попробуйте снова.';
           modalSidebarLine.style.width = '100%';
           window.removeEventListener('popstate', popstateEvent)

           setTimeout(() => {
             modalBlock.classList.remove('modal_open');
             htmlHidden.classList.remove('body_block');
             sendButton.removeEventListener('click', onSubmit);
             backFunc();
           }, 5000);
         })
       }

       //кнопка Отправить
       sendButton.addEventListener('click', onSubmit);




       const popstateEvent = () => {
         if (!getParameterByName('calculator')) {
           window.removeEventListener('popstate', popstateEvent)
           window.setTimeout(function () {
             modalBlock.classList.remove('modal_open');
             htmlHidden.classList.remove('body_block');
             sendButton.removeEventListener('click', onSubmit);
           }, 500);

         }
       }

       window.addEventListener('popstate', popstateEvent)
     };




// start



   // const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
   // const newUrl = baseUrl + '?calculator=1';
   // window.history.pushState(null, null, newUrl);

   playTest();

// start

 }