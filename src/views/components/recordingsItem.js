import {h} from 'preact';
import moment from 'moment'
import 'moment-timezone';
import 'moment-duration-format';

import Card from '../components/card';
import StarRatingComponent from 'react-star-rating-component';

const RecordingsItem = ({number, record}) => (
	<Card>

		<h3>Record Number: {number + 1}</h3>

		<span class="rating-label">Rating:</span>

		<StarRatingComponent
			name="rating"
      starCount={5}
      editing={false}
			value={record.rating}
			starColor={'#1358C9'}/>

		<br/>

		<span>Created :{moment(record.created).format('YYYY/MM/DD')}</span>

    <p>Duration: {moment.duration(record.duration, "seconds").format("mm")} Minutes</p>

    <p dangerouslySetInnerHTML={{__html: record.final_script}}/>

    <br/>

		<audio class='audio' controls>
			<source src={record.url} type="audio/mp3"/>
		</audio>

	</Card>
);

export default RecordingsItem;
