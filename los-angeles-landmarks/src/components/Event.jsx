const Event = (props) => {
    return (
        <td className={'Event ' + props.href}>
            <button>{props.event}</button>
        </td>
        )
}

export default Event;