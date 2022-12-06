import DropDown from "../DropDownCmpnt/DropDown";
import { Component } from "react";

class TopSettings extends Component {
    constructor(props) {
        super(props);
            this.state = {
                topics : this.getTopics("1"),
                category: this.getCategories()
            } 
            this.onChange = this.onChange.bind(this);
            this.getCategories = this.getCategories.bind(this);
            this.getTopics = this.getTopics.bind(this);
    }
    getCategories() {
        let categories = null;
        if (this.props.data) {
            let cat = this.props.data["categories"]
            categories =  cat.map((category)=> {
                return { value: category.id, label: category.name };
            });
        }
        return categories;
    }
    getTopics(num) {
        let topics = null;
        if (this.props.data) {
            let topicsArray = Object.values(this.props.data["categories"])[num-1]["topicList"];
            topics = topicsArray.map((topic) => {
                return { value: topic.id, label: topic.topic_title };
            });
        }
        return topics;
    }
    onChange(e){
        this.props.categoryOnchange(e);
        this.setState({topics: this.getTopics(e.target.value)});
    }
    render() {
        return (
            <div className="top-settings">
                <DropDown options={this.state.category} onChange={this.onChange} type="category" />
                <DropDown options={this.state.topics} onChange={this.props.topicOnchange} type="topic" />
            </div>
        );
    }
}
export default TopSettings;