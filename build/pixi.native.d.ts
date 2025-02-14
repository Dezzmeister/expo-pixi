import "@expo/browser-polyfill";
import { ExpoWebGLRenderingContext } from "expo-gl";
import * as filters from "pixi-filters";
import * as PIXIInstance from "pixi.js";
interface ApplicationOptions extends PIXIInstance.ApplicationOptions {
    context: ExpoWebGLRenderingContext;
}
declare class PIXIApplication extends PIXIInstance.Application {
    constructor({ context, width, height, resolution, ...props }: ApplicationOptions);
}
declare class PIXISprite extends PIXIInstance.Sprite {
    static from(asset: any): any;
}
declare class PIXITexture extends PIXIInstance.Texture {
    static from(asset: any): any;
}
export declare const PIXI: {
    filters: {
        FXAAFilter: typeof filters.FXAAFilter;
        BlurFilter: typeof filters.BlurFilter;
        BlurXFilter: typeof filters.BlurXFilter;
        BlurYFilter: typeof filters.BlurYFilter;
        ColorMatrixFilter: typeof filters.ColorMatrixFilter;
        DisplacementFilter: typeof filters.DisplacementFilter;
        AlphaFilter: typeof filters.AlphaFilter;
        NoiseFilter: typeof filters.NoiseFilter;
        AdjustmentFilter: typeof filters.AdjustmentFilter;
        AdvancedBloomFilter: typeof filters.AdvancedBloomFilter;
        AsciiFilter: typeof filters.AsciiFilter;
        BevelFilter: typeof filters.BevelFilter;
        BloomFilter: typeof filters.BloomFilter;
        BulgePinchFilter: typeof filters.BulgePinchFilter;
        ColorMapFilter: typeof filters.ColorMapFilter;
        ColorReplaceFilter: typeof filters.ColorReplaceFilter;
        ConvolutionFilter: typeof filters.ConvolutionFilter;
        CrossHatchFilter: typeof filters.CrossHatchFilter;
        CRTFilter: typeof filters.CRTFilter;
        DotFilter: typeof filters.DotFilter;
        DropShadowFilter: typeof filters.DropShadowFilter;
        EmbossFilter: typeof filters.EmbossFilter;
        GlitchFilter: typeof filters.GlitchFilter;
        GlowFilter: typeof filters.GlowFilter;
        GodrayFilter: typeof filters.GodrayFilter;
        KawaseBlurFilter: typeof filters.KawaseBlurFilter;
        MotionBlurFilter: typeof filters.MotionBlurFilter;
        MultiColorReplaceFilter: typeof filters.MultiColorReplaceFilter;
        OldFilmFilter: typeof filters.OldFilmFilter;
        OutlineFilter: typeof filters.OutlineFilter;
        PixelateFilter: typeof filters.PixelateFilter;
        RadialBlurFilter: typeof filters.RadialBlurFilter;
        ReflectionFilter: typeof filters.ReflectionFilter;
        RGBSplitFilter: typeof filters.RGBSplitFilter;
        ShockwaveFilter: typeof filters.ShockwaveFilter;
        SimpleLightmapFilter: typeof filters.SimpleLightmapFilter;
        TiltShiftFilter: typeof filters.TiltShiftFilter;
        TwistFilter: typeof filters.TwistFilter;
        ZoomBlurFilter: typeof filters.ZoomBlurFilter;
    };
    Application: typeof PIXIApplication;
    Texture: typeof PIXITexture;
    Sprite: typeof PIXISprite;
    autoDetectRenderer(width: number, height: number, options?: PIXIInstance.RendererOptions | undefined, forceCanvas?: boolean | undefined): PIXIInstance.WebGLRenderer | PIXIInstance.CanvasRenderer;
    autoDetectRenderer(options?: PIXIInstance.RendererOptions | undefined): PIXIInstance.WebGLRenderer | PIXIInstance.CanvasRenderer;
    VERSION: string;
    PI_2: number;
    RAD_TO_DEG: number;
    DEG_TO_RAD: number;
    RENDERER_TYPE: {
        UNKNOWN: number;
        WEBGL: number;
        CANVAS: number;
    };
    BLEND_MODES: {
        NORMAL: number;
        ADD: number;
        MULTIPLY: number;
        SCREEN: number;
        OVERLAY: number;
        DARKEN: number;
        LIGHTEN: number;
        COLOR_DODGE: number;
        COLOR_BURN: number;
        HARD_LIGHT: number;
        SOFT_LIGHT: number;
        DIFFERENCE: number;
        EXCLUSION: number;
        HUE: number;
        SATURATION: number;
        COLOR: number;
        LUMINOSITY: number;
        NORMAL_NPM: number;
        ADD_NPM: number;
        SCREEN_NPM: number;
    };
    DRAW_MODES: {
        POINTS: number;
        LINES: number;
        LINE_LOOP: number;
        LINE_STRIP: number;
        TRIANGLES: number;
        TRIANGLE_STRIP: number;
        TRIANGLE_FAN: number;
    };
    SCALE_MODES: {
        LINEAR: number;
        NEAREST: number;
    };
    WRAP_MODES: {
        CLAMP: number;
        MIRRORED_REPEAT: number;
        REPEAT: number;
    };
    TRANSFORM_MODE: {
        DEFAULT: number;
        DYNAMIC: number;
        STATIC: number;
    };
    PRECISION: {
        LOW: string;
        MEDIUM: string;
        HIGH: string;
    };
    GC_MODES: {
        AUTO: number;
        MANUAL: number;
    };
    SHAPES: {
        POLY: number;
        RECT: number;
        CIRC: number;
        ELIP: number;
        RREC: number;
    };
    TEXT_GRADIENT: {
        LINEAR_VERTICAL: number;
        LINEAR_HORIZONTAL: number;
    };
    UPDATE_PRIORITY: {
        INTERACTION: number;
        HIGH: number;
        NORMAL: number;
        LOW: number;
        UTILITY: number;
    };
    loader: PIXIInstance.loaders.Loader;
    settings: typeof PIXIInstance.settings;
    accessibility: typeof PIXIInstance.accessibility;
    CONST: typeof PIXIInstance.CONST;
    Bounds: typeof PIXIInstance.Bounds;
    Container: typeof PIXIInstance.Container;
    DisplayObject: typeof PIXIInstance.DisplayObject;
    TransformBase: typeof PIXIInstance.TransformBase;
    TransformStatic: typeof PIXIInstance.TransformStatic;
    Transform: typeof PIXIInstance.Transform;
    GraphicsData: typeof PIXIInstance.GraphicsData;
    Graphics: typeof PIXIInstance.Graphics;
    CanvasGraphicsRenderer: typeof PIXIInstance.CanvasGraphicsRenderer;
    GraphicsRenderer: typeof PIXIInstance.GraphicsRenderer;
    WebGLGraphicsData: typeof PIXIInstance.WebGLGraphicsData;
    PrimitiveShader: typeof PIXIInstance.PrimitiveShader;
    GroupD8: typeof PIXIInstance.GroupD8;
    Matrix: typeof PIXIInstance.Matrix;
    PointLike: typeof PIXIInstance.PointLike;
    ObservablePoint: typeof PIXIInstance.ObservablePoint;
    Point: typeof PIXIInstance.Point;
    Circle: typeof PIXIInstance.Circle;
    Ellipse: typeof PIXIInstance.Ellipse;
    Polygon: typeof PIXIInstance.Polygon;
    Rectangle: typeof PIXIInstance.Rectangle;
    RoundedRectangle: typeof PIXIInstance.RoundedRectangle;
    SystemRenderer: typeof PIXIInstance.SystemRenderer;
    CanvasRenderer: typeof PIXIInstance.CanvasRenderer;
    CanvasMaskManager: typeof PIXIInstance.CanvasMaskManager;
    CanvasRenderTarget: typeof PIXIInstance.CanvasRenderTarget;
    WebGLRenderer: typeof PIXIInstance.WebGLRenderer;
    WebGLState: typeof PIXIInstance.WebGLState;
    TextureManager: typeof PIXIInstance.TextureManager;
    TextureGarbageCollector: typeof PIXIInstance.TextureGarbageCollector;
    ObjectRenderer: typeof PIXIInstance.ObjectRenderer;
    Quad: typeof PIXIInstance.Quad;
    RenderTarget: typeof PIXIInstance.RenderTarget;
    BlendModeManager: typeof PIXIInstance.BlendModeManager;
    FilterManager: typeof PIXIInstance.FilterManager;
    StencilMaskStack: typeof PIXIInstance.StencilMaskStack;
    MaskManager: typeof PIXIInstance.MaskManager;
    StencilManager: typeof PIXIInstance.StencilManager;
    WebGLManager: typeof PIXIInstance.WebGLManager;
    Filter: typeof PIXIInstance.Filter;
    SpriteMaskFilter: typeof PIXIInstance.SpriteMaskFilter;
    BatchBuffer: typeof PIXIInstance.BatchBuffer;
    SpriteRenderer: typeof PIXIInstance.SpriteRenderer;
    CanvasSpriteRenderer: typeof PIXIInstance.CanvasSpriteRenderer;
    CanvasTinter: typeof PIXIInstance.CanvasTinter;
    TextStyle: typeof PIXIInstance.TextStyle;
    TextMetrics: typeof PIXIInstance.TextMetrics;
    Text: typeof PIXIInstance.Text;
    BaseRenderTexture: typeof PIXIInstance.BaseRenderTexture;
    BaseTexture: typeof PIXIInstance.BaseTexture;
    RenderTexture: typeof PIXIInstance.RenderTexture;
    TextureMatrix: typeof PIXIInstance.TextureMatrix;
    TextureUvs: typeof PIXIInstance.TextureUvs;
    Spritesheet: typeof PIXIInstance.Spritesheet;
    VideoBaseTexture: typeof PIXIInstance.VideoBaseTexture;
    ticker: typeof PIXIInstance.ticker;
    Shader: typeof PIXIInstance.Shader;
    extract: typeof PIXIInstance.extract;
    extras: typeof PIXIInstance.extras;
    interaction: typeof PIXIInstance.interaction;
    MiniSignalBinding: typeof PIXIInstance.MiniSignalBinding;
    MiniSignal: typeof PIXIInstance.MiniSignal;
    loaders: typeof PIXIInstance.loaders;
    mesh: typeof PIXIInstance.mesh;
    particles: typeof PIXIInstance.particles;
    prepare: typeof PIXIInstance.prepare;
    glCore: typeof PIXIInstance.glCore;
    utils: typeof PIXIInstance.utils;
};
export {};
