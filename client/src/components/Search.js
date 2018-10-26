import React from "react";


const Search = (props) => {

    return (

        <div>
            <h2 className="text-center">New York Times React</h2>
            <div className="jumbotron">
                <form>
                    <div className="form-group">
                        <label for="searchbox">Search Articles</label>
                        <input type="text" className="form-control" id="searchbox" placeholder="Subject" onChange={props.handleSubject}></input>
                    </div>
                    <div className="form-group">
                        <label for="beginYear">Start Year</label>
                        <input type="text" className="form-control" id="beginYear" placeholder="Start Year (YYYY)" onChange={props.handleBeginYear}></input>
                    </div>
                    <div className="form-group">
                        <label for="beginYear">End Year</label>
                        <input type="text" className="form-control" id="endYear" placeholder="End Year (YYYY)" onChange={props.handleEndYear}></input>
                    </div>
                        <button type="submit" onClick={props.handleSubmit}>Search</button>
                </form>
            </div>


        </div>
    )
};

export default Search;





