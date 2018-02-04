//Funciones JS
var local_comprobar_nombre=localStorage.getItem('nombre');
var res_nombre = local_comprobar_nombre.split(",");
document.write("<br/>");

    document.write("<center>");
        document.write("<table border='2px' padding='5px'>");
            document.write("<tr>");
                document.write("<td>");
                document.write(" JUGADORES ");
                document.write("</td>");
                document.write("<td>");
                document.write(" PUNTOS ");
                document.write("</td>");
            document.write("</tr>");

        for(var i=0;i<res_nombre.length;i++){

            document.write("<tr>");
                document.write("<td>");
                    document.write(res_nombre[i]);
                    var nom= res_nombre[i];
                document.write("</td>");
                document.write("<td>");
                    document.write(localStorage.getItem(nom+'_puntuacion'));
                document.write("</td>");
            document.write("</tr>");
        }
    document.write("</table>");
    document.write("</center>");
