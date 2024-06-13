interface Props {
  title: string;
  description: string;
}

const Component4 = ({ title, description }: Props) => {
  return (
    <div id="component4">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="comp4">
              <div className="comp4-image">
                <img src="/img/comp4/01.jpg" alt=" " />
              </div>
            </div>
            <div className="comp4-content">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
              <div className="comp4-meta">- John Locke</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="comp4">
              <div className="comp4-image">
                <img src="/img/comp4/02.jpg" alt=" " />
              </div>
            </div>
            <div className="comp4-content">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
              <div className="comp4-meta">-Sayid Jarrah</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="comp4">
              <div className="comp4-image">
                <img src="/img/comp4/06.jpg" alt=" " />
              </div>
            </div>
            <div className="comp4-content">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
              <div className="comp4-meta">- Kate Austen</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component4;