const requireAll = requireContext => requireContext.keys().map(requireContext);

// import all svg
const req = require.context('./icons', true, /\.svg$/);
requireAll(req);