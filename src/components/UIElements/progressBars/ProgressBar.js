import ProgressBarDanger from './ProgressBarDanger';
import ProgressBarWarning from './ProgressBarWarning';
import ProgressBarSuccess from './ProgressBarSuccess';

function ProgressBar({percentage}) {
    if(percentage < 50) { 
        <ProgressBarDanger />
    } else if(percentage > 50) {
        if(percentage > 80) {
            <ProgressBarSuccess />
        }
        <ProgressBarWarning />
    }
}

export default ProgressBar;