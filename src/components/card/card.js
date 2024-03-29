import styles from "./card.module.css";

function Card(props) {
  return (
    <>
      <article className={styles.wrapper}>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={props.image}
            alt="recipe or project"
          />
          <div class="containerCard">
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>

            <button className={styles.btn} onClick={props.buttonlink}>
              {props.titlebutton}
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
