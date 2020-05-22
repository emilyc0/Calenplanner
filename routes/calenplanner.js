module.exports =
{
    mainCal: function(request, response)
    {      
            
            
        let query = 'SELECT * FROM tasks'
    
        function queryCallback(error, result)
        {
            if(error)
            {
                return response.status(500).send(error);
            }
    
            let renderData ={ calendarDat: result }
            response.render('calenplanner', renderData)
    
        }
        db.query(query, queryCallback);
            
        
        
        
    }
};

/*function renderListJa()
{
    let query = 'SELECT * FROM january'

    function queryCallback(error, result)
    {
        if(error)
        {
            return response.status(500).send(error);
        }

        let renderData ={ january: result; }
        response.render('calenplanner', renderData)

    }
    db.query(query, queryCallback);
}*/
