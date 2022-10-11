const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function drawPolygon(radius, edges)
{
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.moveTo(0, 0);
    ctx.beginPath();
    for(let i = 0; i<=edges; i++)
    {
        ctx.lineTo(0, 0- radius);
        ctx.rotate(Math.PI / (edges/2));
        ctx.lineTo(0, 0- radius);
    }
    ctx.restore();
    ctx.stroke();
}

// drawPolygon(radius, edges) - draw a polygon of required radius and number of edges.
drawPolygon(100, 3);
