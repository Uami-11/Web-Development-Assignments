function generateRightAngle(height)
{
    for (var i = 0; i < height; i ++)
    {
        var row = "";
        
        for (var j = 0; j <= i; j++)
        {
            row += "* ";
        }
        console.log(row);
    }
}

generateRightAngle(5);