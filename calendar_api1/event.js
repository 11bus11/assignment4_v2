class Event {
    constructor(context_code, title, description, start_at, end_at) {
        this.context_code = context_code;
        this.title = title;
        this.description = description;
        this.start_at = start_at;
        this.end_at = end_at;
    }

    get context_code() {
    return this.context_code;
  }
}

//export default class Event{};