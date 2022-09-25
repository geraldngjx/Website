import Link from "next/link";

import classes from "./GroupCard.module.css";

function GroupCard() {
  return (
    <div className={classes.body}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkogjegm5/image/upload/v1658133064/gerald/ForACause_1_t6lsgo.png"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link href="https://github.com/geraldngjx/ForACauseFinal">
                  For A Cause
                </Link>
              </h5>
              <p className="card-text">
                ForACause helps to make volunteering more accessible as it
                displays details of various volunteering opportunities all over
                Singapore. The centralised interactive map is able to give an
                overview of the various opportunities to give back to the
                community. With a few clicks, users are able to quickly find out
                what different opportunities entail.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkogjegm5/image/upload/v1658133784/gerald/ReactPanda_1_kbvg0x.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link href="https://github.com/geraldngjx/ReactPanda-Shopping-eCart">
                  ReactPanda
                </Link>
              </h5>
              <p className="card-text">
                A shopping eCart project, inspired by a Udemy Code-Along
                Project, created to practice some advanced functionalities of
                ReactJS. The theme is neon pink and was customised using some
                ReactJS styling and css modules.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkogjegm5/image/upload/v1658133781/gerald/ExpenseLoggerReact_1_esfeuo.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link href="https://github.com/geraldngjx/Expense-Logger-React">
                  Expense Logger React
                </Link>
              </h5>
              <p className="card-text">
                A simple project (inspired from a Udemy code-along project) for
                me to practice using components, events and hooks in ReactJS.
                Customised with a neon blue theme to practice CSS.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personal Website</h5>
              <p className="card-text">
                Personal Website built using NextJS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
