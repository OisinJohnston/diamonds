const types = {
    Solid: 0,
    Hollow: 1,
    Crossed: 2,
}



function generate_pattern(rows, cols, type) {
    string = ""
    full = "*".repeat(cols) + "<br/>"
    switch(type) {
        case types.Crossed:
            string += full
            rows -= 2
            cols -= 2
            for (let j=0; j<rows; j++) {
                string += "*"
                for (let i=0; i<rows; i++) {
                    if ((rows-j-1) == i || (i-j-1) == rows) {
                        string += "*"
                    } else {
                        string += "&nbsp;&nbsp"
                    }
                }
                string += "*<br/>"

            }
            string += full
            break;

        case types.Hollow:
            // if the rows aren't greater than 2 we won't break and the solid code will execute
            if (rows > 2) {
                string += full
                rows -= 2
                cols -= 2
                for (let i=0; i<rows; i++) {
                    string += "*"

                    for (let j=0; j<cols; j++) {
                        string+="&nbsp;&nbsp;"
                    }
                    string += "*<br/>"
                }
                string += full
                break;
            }

        case types.Solid:
            for (let i=0; i<rows; i++) {

                for (let j=0; j<cols; j++) {
                    string += "*";
                }

                string += "<br/>";
            }
            break;
    }
    return string
}

type = types[prompt("Input a type: Solid, Hollow or Crossed")]
rows = +prompt("Rows: ")
cols = rows
if (type != types.Crossed){
    cols = +prompt("Columns: ")
}


document.write("<p>" + generate_pattern(rows, cols, type) + "</p>")

