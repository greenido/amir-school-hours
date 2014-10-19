/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });


  var whoButton = querySelector('#who');
  whoButton.addEventListener('click', function() {
    alert("הורים ותלמידים יקרים, להלן מס' הודעות: בימי א' יש להביא ספר קריאה מהבית. שימו לב! שיעורי לשון יתקיימו בימי שני בשעה השנייה. יש להצטייד בחוברת לשון+ מחברת לשון ביום שלישי, ה-28.10, תיערך משימת הערכה בתורה  על פרקים א'-ד'- . יש להביא מילון עברי ולהשאירו בכיתה. יש להיכנס לפורום הכיתה ולהתעדכן בשיעורי הבית. יש להכין את הילקוט על פי התכנון השבועי. שבוע טוב!");
  });
  //

})();
