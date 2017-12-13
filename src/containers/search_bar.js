import React, { Component } from 'react';
import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        // JSX 엘리먼트나 DOM 엘리먼트를 전달하는 콜백이 있는 경우
        // 이를 컨텍스트로 바인딩 해야함.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        // 브라우저가 form으로 제출하지 않게 함
        // 기본적으로 form 태그를 사용해서 만들고 막는것이 좋음
        // 이벤트 핸들러를 하나만 갖기 위해서
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        // 초기화 하면서 리랜더
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    // 액션 생성자, 호출될 때마다 dispatch와 함께 액션이  반환 됨
    // 이 액션이 미들웨어로 흘러가 리덕스 어플리케이션안의 리듀서로 들어감
    // {fetchWeather: fetchWeather} 와 동일 (ES6 문법)
    return bindActionCreators( {fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);