const PermisionList = ({userList}) => {

    return (
        <>
            {userList.map((user,i)=>{
                return(
                        <tr key={i}>
                            <td>{user.user_id}</td>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>{user.delivery_module}</td>
                            <td>{user.stock_module}</td>
                            <td>{user.order_module}</td>
                            <td>{user.sells_module}</td>
                            <td>{user.production_module}</td>
                            <td>{user.report_module}</td>
                         </tr>
                )
            })}
        </>
     );
}
 
export default PermisionList;