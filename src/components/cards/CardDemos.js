import React, { Component } from 'react';
import SkewedBorderDemo from './SkewedBorderDemo';
import './cards.css';
import GlowingCardDemo from './GlowingCardDemo';
import FlipHoverCardDemo from './FlipHoverCardDemo';
import IconGrowthCard from './IconGrowthCard';
import CircleGrowthIconCard from './CircleGrowthIconCard';
import CodeWindow from '../codewindows/CodeWindow';
import HoverSwitchCardDemo from './HoverSwitchCardDemo';
import NeumorphismCardDemo from './NeumorphismCardDemo';
import ImageSlideLeftCardDemo from './ImageSlideLeftCardDemo';
import CircleGrowthServiceCard from './CircleGrowthServiceCard';
import IsometricCardHoverDemo from './IsometricCardHoverDemo';
import FlipUpHoverCardDemo from './FlipUpHoverCardDemo';
import SwivelRotationCardDemo from './SwivelRotationCardDemo';
import CircleReductionServiceCard from './CircleReductionServiceCard';
import GameStyleCardsDemo from './GameStyleCardsDemo';
import DirectionAwareCardDemo from './DirectionAwareCardDemo';
import DepthOfFieldCardDemo from './DepthOfFieldCardDemo';
import ImageClipHoverCardDemo from './ImageClipHoverCardDemo';

export default class CardDemos extends Component {
    state = {

    }
    
    render(){
        return (
            <div className="card-demos-body">
                <ImageClipHoverCardDemo />
                <CodeWindow html=".image-clip-hover-card-demo" />
                <DepthOfFieldCardDemo />
                <CodeWindow html=".depth-of-field-card-demo" />
                <DirectionAwareCardDemo />
                <CodeWindow html=".direction-aware-card-demo" />
                <GameStyleCardsDemo />
                <CodeWindow html=".game-style-cards-demo" />
                <CircleReductionServiceCard />
                <CodeWindow html=".circle-reduction-service-card-demo" />
                <SwivelRotationCardDemo />
                <CodeWindow html=".swivel-rotation-card-demo" />
                <FlipUpHoverCardDemo />
                <CodeWindow html=".flip-up-hover-card-demo" />
                <IsometricCardHoverDemo />
                <CodeWindow html=".isometric-card-hover-demo" />
                <CircleGrowthServiceCard />
                <CodeWindow html=".circle-growth-service-card-demo" />
                <ImageSlideLeftCardDemo />
                <CodeWindow html=".image-slide-left-card-demo" />
                <NeumorphismCardDemo />
                <CodeWindow html=".neumorphism-card-demo" />
                <SkewedBorderDemo />
                <CodeWindow html=".skewed-border-demo" />
                <GlowingCardDemo />
                <CodeWindow html=".glowing-card-demo" />
                <FlipHoverCardDemo />
                <CodeWindow html=".flip-hover-card-demo" />
                <IconGrowthCard />
                <CodeWindow html=".icon-growth-card-demo" />
                <CircleGrowthIconCard />
                <CodeWindow html=".circle-growth-icon-card-demo" />
                <HoverSwitchCardDemo />
                <CodeWindow html=".hover-switch-card-demo" />
            </div>
        )
    }
}