const BaseName = "Seipp.procedimento_visualizar";

SavedOptions.CheckTypes.forEach(function(element) {
  switch (element) {
    case "exibeinfointeressado":
      ConsultarInteressado(BaseName);
      break;
    default:
      break;
  }
}, this);
