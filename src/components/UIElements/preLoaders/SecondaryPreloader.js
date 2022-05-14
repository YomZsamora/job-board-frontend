

function SecondaryPreloader({width, height}) {
    return (
        <div class="secondary svg-loader">
            <svg class="svg-container" height={height} width={width} viewBox="0 0 100 100">
                <circle class="loader-svg bg" cx="50" cy="50" r="45"></circle>
                <circle class="loader-svg animate" cx="50" cy="50" r="45"></circle>
            </svg>
        </div>
    )
}

export default SecondaryPreloader;