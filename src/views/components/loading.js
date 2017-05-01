import {h} from 'preact';

const Loading = () => (
  <div class='loading_spinner-wrap'>
    <svg class='loading_spinner' width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='7' cy='15' r='4' />
      <circle cx='30' cy='15' r='4' />
      <circle cx='53' cy='15' r='4' />
    </svg>
  </div>
)

export default Loading
