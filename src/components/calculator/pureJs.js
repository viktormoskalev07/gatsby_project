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
      let DOCDoll;
      let threeDDoll;
      let APDoll;
      let AKDoll;
      let EPDoll;
      let ARDoll;
      let RSDoll;
      const AAA = 1.4;
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
            DOC = 100 * 25 * AAA * dollarRate;
            threeD = DOC * 0.8;
            AK = (DOC + threeD) * 0.5;
          }
          if (area.value > 100) {
            DOC = area.value * 25 * AAA * dollarRate;
            threeD = DOC * 0.8;
            AK = (DOC + threeD) * 0.5;
          }
          if (area.value >= 200) {
            DOC = area.value * 20 * AAA * dollarRate;
            threeD = DOC * 0.8;
            AK = (DOC + threeD) * 0.4;
          }
          if (area.value >= 400) {
            DOC = ((400 * 20 * AAA) + (area.value - 400) * 10) * dollarRate;
            threeD = DOC * 0.8;
            AK = (DOC + threeD) * 0.3;
          }
          if (area.value >= 600) {
            //DOC = area.value * 10 * dollarRate;
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
            DOC = 100 * 25 * AAA * dollarRate;
            threeD = DOC * 0.5;
            AK = (DOC + threeD) * 0.5;
          }
          if (area.value > 100) {
            DOC = area.value * 25 * AAA * dollarRate;
            threeD = DOC * 0.5;
            AK = (DOC + threeD) * 0.5;
          }
          if (area.value >= 200) {
            DOC = area.value * 20 * AAA * dollarRate;
            threeD = DOC * 0.4;
            AK = (DOC + threeD) * 0.4;
          }
          if (area.value >= 400) {
            DOC = ((400 * 20 * AAA) + (area.value - 400) * 10) * dollarRate;
            threeD = DOC * 0.4;
            AK = (DOC + threeD) * 0.3;
          }
          if (area.value >= 600) {
            //  DOC = area.value * 10 * dollarRate;
            threeD = DOC * 0.4;
            AK = (DOC + threeD) * 0.2;
          }
        }
        AP = 1000 * AAA * dollarRate;
        DI = DOC + threeD;
        sumDI = DI;
        DOCDoll = Math.round((DOC / dollarRate) / 100) * 100;
        threeDDoll = Math.round((threeD / dollarRate) / 100) * 100;
        APDoll = Math.round((AP / dollarRate) / 100) * 100;
        AKDoll = Math.round((AK / dollarRate) / 100) * 100;

        let html = '';
        html += '<li class="modal_step5_li">Дизайн проект ' + Math.round(DOC) + ' р. ($' + Math.round(DOCDoll) +')</li>';
        html += '<li class="modal_step5_li">3D–визуализация интерьера ' + Math.round(threeD) + ' р. ($' + Math.round(threeDDoll) +')</li>';
        html += '<li class="modal_step5_li">Контроль за подрядчиками</li>';
        if (isAgreement) {
          html += '<li class="modal_step5_li">Согласование проекта ' + Math.round(AP) + ' р. ($' + Math.round(APDoll) +')</li>';
          sumDI += AP;
        }
        if (isSupport) {
          html += '<li class="modal_step5_li">Авторское сопровождение/Комплектация объекта ' + Math.round(AK) + ' р. ($' + Math.round(AKDoll) +')</li>';
          sumDI += AK;
        }

        list.innerHTML = html;

        const sumBYN = Math.round(sumDI / 100) * 100;
        resultBYN.innerHTML = prettify(sumBYN) + " р.";
        resultUSD.innerHTML = '$' + prettify(Math.round((sumDI / dollarRate) / 100) * 100);
      }


      let RF;
      let EP;
      let AR;
      let SUM;
      let AKd;
      let AKp;
      let RS = Math.round(2500 * AAA * dollarRate);

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
            DOC = 200 * 20 * AAA * dollarRate;
            threeD = DOC * 0.8;
            EP = 3000 * AAA * dollarRate;
            AR = 3000 * AAA * dollarRate;
            AKp = (EP + AR) * 0.5;
            AKd = (DOC + threeD) * 0.5;
          }
          if (area.value > 200) {
            DOC = area.value * 20 * AAA * dollarRate;
            threeD = DOC * 0.8;
            EP = 3500 * AAA * dollarRate;
            AR = 3500 * AAA * dollarRate;
            AKp = (EP + AR) * 0.4;
            AKd = (DOC + threeD) * 0.4;
          }
          if (area.value >= 401) {
            DOC = ((400 * 20 * AAA) + (area.value - 400) * 10) * dollarRate;
            threeD = DOC * 0.8;
            EP = 4000 * AAA * dollarRate;
            AR = 4000 * AAA * dollarRate;
            AKp = (EP + AR) * 0.3;
            AKd = (DOC + threeD) * 0.3;
          }
          if (area.value >= 600) {
            //  DOC = area.value * 10 * dollarRate;
            threeD = DOC * 0.8;
            EP = 4500 * AAA * dollarRate;
            AR = 4500 * AAA * dollarRate;
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
            DOC = 200 * 20 * AAA * dollarRate;
            threeD = DOC * 0.5;
            EP = 3000 * AAA * dollarRate;
            AR = 3000 * AAA * dollarRate;
            AKp = (EP + AR) * 0.5;
            AKd = (DOC + threeD) * 0.5;
          }
          if (area.value > 200) {
            DOC = area.value * 20 * AAA * dollarRate;
            threeD = DOC * 0.4;
            EP = 3500 * AAA * dollarRate;
            AR = 3500 * AAA * dollarRate;
            AKp = (EP + AR) * 0.4;
            AKd = (DOC + threeD) * 0.4;
          }
          if (area.value >= 401) {
            DOC = ((400 * 20 * AAA) + (area.value - 400) * 10) * dollarRate;
            threeD = DOC * 0.4;
            EP = 4000 * AAA * dollarRate;
            AR = 4000 * AAA * dollarRate;
            AKp = (EP + AR) * 0.3;
            AKd = (DOC + threeD) * 0.3;
          }
          if (area.value >= 600) {
            //DOC = area.value * 10 * dollarRate;
            threeD = DOC * 0.4;
            EP = 4500 * AAA * dollarRate;
            AR = 4500 * AAA * dollarRate;
            AKp = (EP + AR) * 0.2;
            AKd = (DOC + threeD) * 0.2;
          }
        }
        AP = 1000 * AAA * dollarRate;
        RF = EP * AAA * 0.66;
        DI = DOC + threeD;
        DOCDoll = Math.round((DOC / dollarRate) / 100) * 100;
        threeDDoll = Math.round((threeD / dollarRate) / 100) * 100;
        APDoll = Math.round((AP / dollarRate) / 100) * 100;

        EPDoll = Math.round((EP / dollarRate) / 100) * 100;
        ARDoll = Math.round((AR / dollarRate) / 100) * 100;
        RSDoll = Math.round((RS / dollarRate) / 100) * 100;
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
        AKDoll = Math.round((AK / dollarRate) / 100) * 100;

        SUM = 0;

        let html = '';
        if (isInterior) {
          html += '<li class="modal_step5_li">Дизайн проект ' + Math.round(DOC) + ' р. ($' + Math.round(DOCDoll) +')</li>';
          html += '<li class="modal_step5_li">3D–визуализация интерьера ' + Math.round(threeD) + ' р. ($' + Math.round(threeDDoll) +')</li>';
          SUM += DI;
        }
        if (isSketch) {
          html += '<li class="modal_step5_li">Эскизный проект (архитектура) ' + Math.round(EP) + ' р. ($' + Math.round(EPDoll) +')</li>';
          SUM += EP;
        }
        if (isArcSolutions) {
          html += '<li class="modal_step5_li">Архитектурные решения ' + Math.round(AR) + ' р. ($' + Math.round(ARDoll) +')</li>';
          SUM += AR;
        }
        if (isRelatedSections) {
          html += '<li class="modal_step5_li">Смежные разделы ' + RS + ' р. ($' + Math.round(RSDoll) +')</li>';
          SUM += RS;
        }
        if (isArchitecture) {
          // html += '<li class="modal_step5_li">Реконструкция фасада ' + Math.round(RF) + ' р.</li>';
          // SUM += RF;
        }
        if (isAgreement) {
          html += '<li class="modal_step5_li">Согласование проекта ' + Math.round(AP) + ' р. ($' + Math.round(APDoll) +')</li>';
          SUM += AP;
        }
        if (isInterior) {
          html += '<li class="modal_step5_li">Контроль за подрядчиками</li>';
        }

        if (isSupport) {
          html += '<li class="modal_step5_li">Авторское сопровождение/Комплектация объекта ' + Math.round(AK) + ' р. ($' + Math.round(AKDoll) +')</li>';
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
            svg: '<svg class="modal_step1_icon_apart" width="164" height="142" viewBox="0 0 164 142" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M95 18H164V125H95V18Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M88 64H57C48.7157 64 42 70.7157 42 79V115C42 115.552 42.4477 116 43 116H101C101.552 116 102 115.552 102 115V78C102 70.268 95.732 64 88 64ZM57 63C48.1634 63 41 70.1634 41 79V115C41 116.105 41.8954 117 43 117H101C102.105 117 103 116.105 103 115V78C103 69.7157 96.2843 63 88 63H57Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M59.5 92C60.8807 92 62 90.8807 62 89.5C62 88.1193 60.8807 87 59.5 87C58.1193 87 57 88.1193 57 89.5C57 90.8807 58.1193 92 59.5 92ZM59.5 93C61.433 93 63 91.433 63 89.5C63 87.567 61.433 86 59.5 86C57.567 86 56 87.567 56 89.5C56 91.433 57.567 93 59.5 93Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M84.5 92C85.8807 92 87 90.8807 87 89.5C87 88.1193 85.8807 87 84.5 87C83.1193 87 82 88.1193 82 89.5C82 90.8807 83.1193 92 84.5 92ZM84.5 93C86.433 93 88 91.433 88 89.5C88 87.567 86.433 86 84.5 86C82.567 86 81 87.567 81 89.5C81 91.433 82.567 93 84.5 93Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30 99.5C29.1716 99.5 28.5 100.172 28.5 101V119C28.5 125.904 34.0964 131.5 41 131.5H103C110.456 131.5 116.5 125.456 116.5 118V101C116.5 100.172 115.828 99.5 115 99.5H102.5V98.5H115C116.381 98.5 117.5 99.6193 117.5 101V118C117.5 126.008 111.008 132.5 103 132.5H41C33.5442 132.5 27.5 126.456 27.5 119V101C27.5 99.6193 28.6193 98.5 30 98.5H41.5V99.5H30Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M109 142L109 130L110 130L110 142L109 142Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M111 95L111 32L112 32L112 95L111 95Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34 142L34 130L35 130L35 142L34 142Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M122 87L122 71L123 71L123 87L122 87Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 34C71.5 32.6193 72.6193 31.5 74 31.5H148C149.381 31.5 150.5 32.6193 150.5 34V138C150.5 139.381 149.381 140.5 148 140.5H114V139.5H148C148.828 139.5 149.5 138.828 149.5 138V34C149.5 33.1716 148.828 32.5 148 32.5H74C73.1716 32.5 72.5 33.1716 72.5 34V63.5H71.5V34Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 -4.37114e-08L21 18L20 18L20 0L21 -4.37114e-08Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41 50C41 49.6654 40.9967 49.3321 40.9902 49C40.6517 31.7896 31.6075 18 20.5 18C9.39249 18 0.348259 31.7896 0.00981944 49C0.00328905 49.3321 0 49.6654 0 50H41ZM1.01001 49H39.99C39.8241 40.7265 37.607 33.3027 34.1537 27.912C30.5546 22.294 25.7036 19 20.5 19C15.2964 19 10.4454 22.294 6.84634 27.912C3.39296 33.3027 1.17593 40.7265 1.01001 49Z" fill="#404040"/></svg>',
            id: 'flat',
            steps: [0, 1, 3, 4, 5, 6],
          },
          {
            title: 'Частный дом',
            svg: '<svg class="modal_step1_icon_house" width="129" height="115" viewBox="0 0 129 115" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 36.0004H79V65.0004H56V36.0004Z" fill="white"/><path d="M94 45.0004H117V74.0004H94V45.0004Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M67.5 94.0004C67.5 92.6197 68.6193 91.5004 70 91.5004H79C80.3807 91.5004 81.5 92.6197 81.5 94.0004V114H80.5V94.0004C80.5 93.172 79.8284 92.5004 79 92.5004H70C69.1716 92.5004 68.5 93.172 68.5 94.0004V114H67.5V94.0004Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M126.384 29.4637L20.8711 1.48368L21.1274 0.51709L126.64 28.4971C127.736 28.7878 128.499 29.7797 128.499 30.9136V112C128.499 113.381 127.38 114.5 125.999 114.5H37.4993V11.5004H38.4993V113.5H125.999C126.828 113.5 127.499 112.829 127.499 112V30.9136C127.499 30.2332 127.041 29.6381 126.384 29.4637Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 63.6217C38.5 61.9722 36.9306 60.7748 35.3397 61.2105L2.33969 70.2475C1.25328 70.545 0.5 71.5323 0.5 72.6587V112C0.5 113.381 1.61929 114.5 3 114.5H38.5V104H37.5V113.5H3C2.17157 113.5 1.5 112.829 1.5 112V72.6587C1.5 71.9828 1.95197 71.3905 2.60382 71.212L35.6038 62.175C36.5584 61.9136 37.5 62.632 37.5 63.6217V69.5004H38.5V63.6217Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M73 32.0004H54C53.4477 32.0004 53 32.4481 53 33.0004V57.0004C53 57.5527 53.4477 58.0004 54 58.0004H73C73.5523 58.0004 74 57.5527 74 57.0004V33.0004C74 32.4481 73.5523 32.0004 73 32.0004ZM54 31.0004C52.8954 31.0004 52 31.8958 52 33.0004V57.0004C52 58.1049 52.8954 59.0004 54 59.0004H73C74.1046 59.0004 75 58.1049 75 57.0004V33.0004C75 31.8958 74.1046 31.0004 73 31.0004H54Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M109 40.0004H90C89.4477 40.0004 89 40.4481 89 41.0004V65.0004C89 65.5527 89.4477 66.0004 90 66.0004H109C109.552 66.0004 110 65.5527 110 65.0004V41.0004C110 40.4481 109.552 40.0004 109 40.0004ZM90 39.0004C88.8954 39.0004 88 39.8958 88 41.0004V65.0004C88 66.1049 88.8954 67.0004 90 67.0004H109C110.105 67.0004 111 66.1049 111 65.0004V41.0004C111 39.8958 110.105 39.0004 109 39.0004H90Z" fill="#404040"/></svg>',
            id: 'house',
            steps: [0, 1, 2, 3, 4, 5, 6],
          },
          {
            title: 'Офис, салон',
            svg: '<svg class="modal_step1_icon_office" width="132" height="110" viewBox="0 0 132 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 87L-1.66103e-06 49L112 49L112 87L0 87Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M43 22C43 21.6648 42.9957 21.3314 42.9872 21C42.7014 9.86637 37.6677 1 31.5 1C25.3323 1 20.2986 9.86637 20.0128 21C20.0043 21.3314 20 21.6648 20 22H43ZM21.0131 21H41.9869C41.8483 15.7395 40.623 11.0429 38.7546 7.63107C36.7484 3.96753 34.1402 2 31.5 2C28.8598 2 26.2516 3.96753 24.2454 7.63107C22.377 11.0429 21.1517 15.7395 21.0131 21Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99914 42L22.9991 7.99999L23.9141 8.40363L8.91406 42.4036L7.99914 42Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M130 43H8C7.44772 43 7 43.4477 7 44V57C7 57.5523 7.44772 58 8 58H130C130.552 58 131 57.5523 131 57V44C131 43.4477 130.552 43 130 43ZM8 42C6.89543 42 6 42.8954 6 44V57C6 58.1046 6.89543 59 8 59H130C131.105 59 132 58.1046 132 57V44C132 42.8954 131.105 42 130 42H8Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M121 110L121 63L122 63L122 110L121 110Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 110L16 63L17 63L17 110L16 110Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M126 31H113V37C113 39.2091 114.791 41 117 41H122C124.209 41 126 39.2091 126 37V31ZM112 30V37C112 39.7614 114.239 42 117 42H122C124.761 42 127 39.7614 127 37V30H112Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M91 42V20.5C91 9.73045 82.2696 1 71.5 1C60.7304 1 52 9.73045 52 20.5V42H91ZM71.5 0C60.1782 0 51 9.17816 51 20.5V43H92V20.5C92 9.17816 82.8218 0 71.5 0Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M85.5 72H57.5C54.4624 72 52 69.5376 52 66.5V59H91V66.5C91 69.5376 88.5376 72 85.5 72ZM57.5 73C53.9101 73 51 70.0899 51 66.5V58H92V66.5C92 70.0899 89.0899 73 85.5 73H57.5Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M71 95L71 73L72 73L72 95L71 95Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M52.5987 94.5H90.4009L92.4879 103.892L91.5117 104.108L89.5987 95.5H53.4009L51.4879 104.108L50.5117 103.892L52.5987 94.5Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M114.001 17L118.001 30L117.045 30.2941L113.045 17.2941L114.001 17Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M120 20V31H119V20H120Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M124 19L122 31L121.014 30.8356L123.014 18.8356L124 19Z" fill="#404040"/></svg>',
            id: 'office',
            steps: [0, 1, 2, 4, 5, 6],
          },
          {
            title: 'Ретейл, HoReCa',
            svg: '<svg class="modal_step1_icon_retail" width="117" height="109" viewBox="0 0 117 109" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M95 64.5C95 80.2401 82.2401 93 66.5 93C50.7599 93 38 80.2401 38 64.5C38 48.7599 50.7599 36 66.5 36C82.2401 36 95 48.7599 95 64.5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M58.5 88C75.897 88 90 73.897 90 56.5C90 39.103 75.897 25 58.5 25C41.103 25 27 39.103 27 56.5C27 73.897 41.103 88 58.5 88ZM58.5 89C76.4493 89 91 74.4493 91 56.5C91 38.5507 76.4493 24 58.5 24C40.5507 24 26 38.5507 26 56.5C26 74.4493 40.5507 89 58.5 89Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M59.6641 5.45329C44.181 4.9431 30.0969 11.4576 20.4759 22.129L19.7332 21.4594C29.543 10.5785 43.9071 3.93353 59.6971 4.45383C78.9847 5.08938 95.4443 16.2522 103.742 32.2412L102.854 32.7018C94.7164 17.0207 78.576 6.07645 59.6641 5.45329ZM56.3379 106.398C76.8124 107.073 94.8423 95.4628 103.336 78.2021L104.234 78.6436C95.5724 96.2439 77.1865 108.086 56.3049 107.398C38.7235 106.819 23.4916 97.4919 14.6501 83.7366L15.4913 83.1959C24.1627 96.6866 39.0987 105.83 56.3379 106.398Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M116 59V1.83785C116 1.37544 115.72 1.11359 115.454 1.07597C114.306 0.914033 112.979 0.968135 112.137 1.66359C110.413 3.0871 109.1 5.91666 108.233 9.5577C107.377 13.1505 107 17.3407 107 21.2595V41.1292C107 41.1293 107 41.1298 106 41.1298V21.2595C106 13.3115 107.527 4.17386 111.5 0.892547C112.689 -0.0893895 114.397 -0.0830102 115.593 0.0857719C116.446 0.206072 117 0.976726 117 1.83785V59C117 60.1046 116.105 61 115 61H108C106.895 61 106 60.1046 106 59V41.1298L107 41.1292V59C107 59.5523 107.448 60 108 60H115C115.552 60 116 59.5523 116 59Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M115 61V104.5C115 106.433 113.433 108 111.5 108C109.567 108 108 106.433 108 104.5V61H115ZM111.5 109C109.015 109 107 106.985 107 104.5V60H116V104.5C116 106.985 113.985 109 111.5 109Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 37V105.5C11 106.881 9.88071 108 8.5 108C7.11929 108 6 106.881 6 105.5V37H11ZM8.5 109C6.567 109 5 107.433 5 105.5V36H12V105.5C12 107.433 10.433 109 8.5 109Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 22C17 22 16.6202 22.0736 16 22.1809C14.3341 22.469 10.9338 23 8.5 23C6.06622 23 2.66587 22.469 0.999999 22.1809C0.379794 22.0736 -6.55671e-07 22 -6.55671e-07 22L-3.0598e-07 30C-1.36992e-07 33.866 3.13401 37 7 37L10 37C13.866 37 17 33.866 17 30L17 22ZM0.999999 23.1955L1 30C1 33.3137 3.68629 36 7 36L10 36C13.3137 36 16 33.3137 16 30L16 23.1955C15.4941 23.2819 14.8564 23.3856 14.1473 23.4895C12.4312 23.7407 10.2464 24 8.5 24C6.75361 24 4.56884 23.7407 2.85268 23.4895C2.14362 23.3856 1.5059 23.2819 0.999999 23.1955Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 24L16 -4.88539e-08L17 0L17 24L16 24Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 24L8 -4.88539e-08L9 0L9 24L8 24Z" fill="#404040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-1.04907e-06 24L0 -4.37114e-08L1 0L0.999999 24L-1.04907e-06 24Z" fill="#404040"/></svg>',
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
                        <p class="modal_step5_result_text">Затраты на&nbsp;строительные работы и&nbsp;смету можно будет рассчитать после согласования проекта. Стоимость в&nbsp;долларах указана ориентировочно.</p>
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
                    <textarea class="modal_body6_textarea" name="modal_desc" id="modal_desc" placeholder="Местоположение, особенности вашего объекта, состав семьи"></textarea>
                    <div class="modal_body6_dad">
                      <input type="file" name="modal_file" id="modal_file" class="modal_body6_dad_input">
                      <p class="modal_body6_dad_p"><label for="modal_file" class="modal_body6_dad_button">Прикрепить</label> фото или план объекта (если имеется)</p>
                      <div class="modal_body6_dad_done" style="display: none">
                        <img src="https://i-project.by/portfolio_newsite/calculator/dddone.svg" alt="" class="modal_body6_dad_done_img">
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
         questionTitle.textContent = `${questions[(steps[numberQuestion])||numberQuestion].question}`;

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