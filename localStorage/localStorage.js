'use strict';

// Local Storage
if (typeof Storage != 'undefined') {
  console.log('Local Storage is available');
} else {
  console.log('no');
}

// Almacenando datos en localStorage
localStorage.setItem('eggs', '42');
