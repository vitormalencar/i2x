import {h} from 'preact';
import RecordingsItem from './recordingsItem';


const RecordingsList = ({list}) => (
  <div>{list.map((item,index)=> <RecordingsItem number={index} record={item}/>)}</div>
);



export default RecordingsList;
