import './write.css'

export default function Write() {
    return (
      <main className="write">
        <img src="https://picsum.photos/id/1015/2000" alt="post" className="write__image" />
        <form className="write__form">
          <div className="write__form__group">
            <label htmlFor="file__input">
              <i className="file__input__icon fas fa-plus"></i>
            </label>
            <input type="file" name="file" id="file__input" style={{ display: "none" }} />
            <input type="text" name="title" id="title" placeholder="Title" className="write__form__input" autoFocus={true} />
          </div>
          <div className="write__form__group">
            <textarea placeholder="Tell your story" type="text" className="write__form__input input__textarea"></textarea>
            <button className="write__submit">Publish</button>
          </div>
        </form>
      </main>
    );
}
