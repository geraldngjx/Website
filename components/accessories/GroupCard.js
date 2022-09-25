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
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
