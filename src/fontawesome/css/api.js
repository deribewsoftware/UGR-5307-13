data.forEach(function(tutorial){
    if(tutorial.Subject==="English"){

    output+=`<button class="btn" onclick= getdetails(${programs.p_id})>${tutorial.Chapter}-${tutorial.Title}</button> 
            
       
    </ul>
</li>
</ul>`
    }
).then(data=>{


})