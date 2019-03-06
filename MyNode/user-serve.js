const fetchUserById =(users,uId)=>{
    return users.filter(u=> u.project_id == uId)
}

const fetchUserByProject = (userList, projectList)=>{

    let arr=[];
    projectList.forEach(p => {
        let filteredEmpByID = fetchUserById(userList,p.project_id);
        arr.push({
            projectID : p.project_id,
            projectName : p.project_name,
            projectDomain : p.domain,
            employees : filteredEmpByID
        });
    });
    return arr;
}

module.exports={
    
    byId : fetchUserById,
    byProject : fetchUserByProject
   
}