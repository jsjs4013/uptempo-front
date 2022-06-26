export default function RevRow(props) {
    return (
        <>
            {props.block ? 
                (<div className='bg-red-400 border-b border-red-400 border-x-gray-200'><br/></div>) : (<div className='border-b border-gray-300'><br/></div>)
            }
        </>
    )
}