import AnimatedBlock from "./ScrollComponent";

export default function Cards() {
    return (
        <div class = "row">
            <AnimatedBlock animationClass="animate" cardClass="card1">
                <a class="card-link" href="https://www.givelify.com/donate/dae-hueng-korean-presbyterian-church-gardena-ca-2j7wy5NjI0NTk=/donation/amount"
                        target = "_blank">Give</a>
            </AnimatedBlock>
            <AnimatedBlock animationClass="animate"cardClass="card2">
                <a class="card-link" href="">Audio Sermons</a>
            </AnimatedBlock>
            <AnimatedBlock animationClass="animate" cardClass="card3">
                <a class="card-link" href="/assets/ARC-bulletin.pdf" target="blank">Sunday Bulletin</a>
            </AnimatedBlock>
        </div>
    );
}