import { AdvancedMarker } from "@vis.gl/react-google-maps";

const Markers = (props) => {

    const handleSetService = (data) => {
        props.setClickedService(data);
    }

    return <>
        {props.markers.map((point) => {
            return <AdvancedMarker onClick={() => handleSetService(point)} position={point.coordinates} key={point._id}>
                <span  style={{ fontSize: '20px' }}>👽</span>
            </AdvancedMarker>
        })}
    </>
}

export default Markers;