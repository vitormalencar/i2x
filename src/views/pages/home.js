import {h, Component} from 'preact';
import {loadRecordingsList} from '../../core/api';

import Layout from '../components/layout';
import Loading from '../components/loading'
import RecordingsList from '../components/recordingsList';

export default class extends Component {

	state = {
		recordings:[],
		loading:true
	}

	updateRecordings = (recordings) => this.setState({recordings, loading:false});

	componentWillMount() {
		loadRecordingsList()
		.then(response => this.updateRecordings(response.data.results))
		.catch(error => console.log(error));
	}


	render(props,{recordings,loading}) {

		if(loading)
			return(<Loading/>);

		return (
			<Layout>
				<div className="page page__home">
					<RecordingsList list={recordings}/>
				</div>
			</Layout>
		);
	}
}
