interface Config {
    /** Indicates whether live regions inside `ShadowRoot`s should be tracked */
    includeShadowDom?: boolean;
}

let config: Config = {
    includeShadowDom: false,
};

/**
 * Configure global options
 */
export function configure(newConfig: Config | Partial<Config>): void {
    config = {
        ...config,
        ...newConfig,
    };
}

/**
 * Get global options
 */
export function getConfig(): Config {
    return config;
}
