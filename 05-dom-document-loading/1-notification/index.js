export default class NotificationMessage {
  static resetHandler;
  element;
  timeoutID;
  constructor(
    message ='',
    {
      duration = 2000,
      type = 'success'
              }={}) {
    this.message = message;
    this.duration = duration;
    this.type = type;

    this.render();
  }

  get template(){
    return `
      <div id="foo" class="notification ${this.statusChecker}" style="--value:${this.duration/1000}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">Notification</div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>
    `
  }

  render(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element= wrapper.firstElementChild;
  }

  show(parent = document.body){
    if(NotificationMessage.resetHandler){
      NotificationMessage.resetHandler.removeDuplicate();
    }
    parent.append(this.element)

    this.timeoutID = setTimeout(()=>{
      this.removeDuplicate()
    }, this.duration)

    NotificationMessage.resetHandler = this;
  }

  get statusChecker(){
    return this.type === 'success' ? 'success': 'error';
  }

  removeDuplicate(){
      clearTimeout(this.timeoutID);

      if(this.element){
        this.element.remove()
      }
  }
  destroy(){
    this.removeDuplicate();
    this.element = null;
    NotificationMessage.resetHandler = null;
  }
}
