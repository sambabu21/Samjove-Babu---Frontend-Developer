export default function CapsuleTile({ name,type,status }){
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{status}</td>
        </tr>
    )
}