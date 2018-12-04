'use strict';

(function () {
  var setupWizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardCoatColorInput = document.querySelector('input[name=coat-color]');
  var setupWizardEyeColor = document.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardEyeColorInput = document.querySelector('input[name=eyes-color]');
  var setupWizardFireballColor = document.querySelector('.setup-fireball-wrap');
  var setupWizardFireballColorInput = document.querySelector('input[name=fireball-color]');

  setupWizardCoatColor.addEventListener('click', function () {
    var newColor = window.GameConstants.COAT_COLORS[Math.floor(Math.random() * window.GameConstants.COAT_COLORS.length)];
    setupWizardCoatColor.style.fill = newColor;
    setupWizardCoatColorInput.value = newColor;
  });

  setupWizardEyeColor.addEventListener('click', function () {
    var newColor = window.util.getNextArrayItem(window.GameConstants.EYES_COLORS, setupWizardEyeColor.style.fill);
    setupWizardEyeColor.style.fill = newColor;
    setupWizardEyeColorInput.value = newColor;
  });

  setupWizardFireballColor.addEventListener('click', function () {
    var newColor = window.GameConstants.FIREBALL_COLORS[Math.floor(Math.random() * window.GameConstants.FIREBALL_COLORS.length)];
    setupWizardFireballColor.style.background = newColor;
    setupWizardFireballColorInput.value = newColor;
  });


  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();

