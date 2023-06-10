// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
//= require bootstrap
//= require jquery

$(document).ready(function() {
    // Obtener la ruta de búsqueda según el controlador actual
    var searchPath = '';
    var controllerName = '<%= controller.controller_name %>';

    if (controllerName === 'administrators') {
      searchPath = '<%= administrators_path %>';
    } else if (controllerName === 'supervisors') {
      searchPath = '<%= supervisors_path %>';
    }

    // Manejar el evento de envío del formulario de búsqueda
    $('#search-form').submit(function(event) {
      event.preventDefault(); // Evitar la recarga de la página

      var searchQuery = $('#search-input').val();

      if (searchQuery.trim() !== '') {
        var searchUrl = searchPath + '?search_query=' + encodeURIComponent(searchQuery);
        window.location.href = searchUrl;
      }
    });
  });
