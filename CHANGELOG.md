# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-11-04

### Added
- Initial release of n8n-nodes-smooth
- Run Task operation for Smooth AI browser agent
- Automatic task polling with 5-second intervals
- Support for all Smooth API parameters:
  - Task description (required)
  - Starting URL
  - Device selection (Desktop/Mobile)
  - Max steps configuration
  - Response model (structured output)
  - Metadata variables
  - Allowed URLs with wildcards
  - Recording toggle
  - Browser profiles (including read-only mode)
  - Stealth mode
  - Ad-blocking
  - Proxy configuration (server, username, password)
  - Client certificates
  - Experimental features
- Comprehensive error handling
- Support for nested API response structure
- Authenticated polling for task status
- 10-minute timeout with configurable max attempts
- Complete task output including:
  - Task results
  - Recording URL
  - Downloads URL
  - Live URL
  - Credits tracking

### Technical Details
- Built with n8n-workflow API version 1
- TypeScript implementation
- ESLint compliant
- Proper n8n routing configuration
- Credentials management via API key
- Custom wait function for polling without restricted globals

[0.1.0]: https://github.com/circlemind-ai/n8n-nodes-smooth/releases/tag/v0.1.0
