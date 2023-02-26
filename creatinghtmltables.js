
window.onload = function()
{
    //createTable1();

    createTable2();

    // createTable3();
}

function createTable2()
{
    const currentDate = new Date();
    const anchorOff = 3
    const anchorDate = new Date(2022, 6, 3, 0, 0, 0, 0);
    const weekDifference = (currentDate.getTime() - anchorDate.getTime())/(1000*3600*24*7);
    const weekOff = Math.floor((weekDifference + anchorOff) % 7);

    const elements = Elements.GetElements();
    const headings = Elements.GetHeadings();
    const properties = Elements.GetProperties();

    // create table
    const table = document.createElement("table");

    // create caption and add to table
    const caption = document.createElement("caption");
    const captiontext = document.createTextNode("IB 43K Schedule");
    caption.appendChild(captiontext);
    table.appendChild(caption);

    // create row for headings...
    const hrow = document.createElement("tr");
    table.appendChild(hrow);

    // ...and add cells to it
    for(let heading of headings)
    {
        const th = document.createElement("th");
        const thtext = document.createTextNode(heading);
        th.appendChild(thtext);
        hrow.appendChild(th);
    }

    // iterate data, adding rows and cells for each item
    for(let element of elements)
    {
        if(element.week !== weekOff)
        {
            if(element.week !== weekOff + 7 )
            {
                const drow = document.createElement("tr");
                table.appendChild(drow);

                for(let property of properties)
                {
                    const td = document.createElement("td");
                    const tdtext = document.createTextNode(element[property]);
                    td.appendChild(tdtext);
                    drow.appendChild(td);
                }
            }
        }
    }

    // add table to div
    document.getElementById("tablediv").appendChild(table);
}
