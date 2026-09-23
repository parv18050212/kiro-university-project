// Kiro University Challenge 2026 - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Kiro University Challenge 2026 - Loaded!');
    
    // Add animation to lesson cards
    const lessonCards = document.querySelectorAll('.lesson-card');
    lessonCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Add click interaction to lesson cards
    lessonCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Log lesson completion status
    const lessons = {
        5: 'Powers - Keyword-based tool loading',
        6: 'MCP - External server integration'
    };

    console.log('Lessons in progress:');
    Object.entries(lessons).forEach(([num, desc]) => {
        console.log(`  Lesson ${num}: ${desc}`);
    });

    // Display current date
    const now = new Date('2026-09-23');
    console.log(`Current date: ${now.toLocaleDateString()}`);
    console.log('Final exam opens: September 25, 2026');
    console.log('Submission deadline: October 5, 2026 at 23:59 PT');

    // Calculate days until submission
    const deadline = new Date('2026-10-05T23:59:00-07:00');
    const daysUntil = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    console.log(`Days until submission deadline: ${daysUntil}`);
});

// Demonstration of potential MCP integration
class MCPDemo {
    constructor() {
        this.servers = ['filesystem', 'fetch'];
        console.log('MCP servers configured:', this.servers);
    }

    async demonstrateFileSystem() {
        console.log('Filesystem MCP: Ready for file operations');
        return {
            status: 'connected',
            server: 'filesystem',
            capabilities: ['read', 'write', 'list', 'search']
        };
    }

    async demonstrateFetch() {
        console.log('Fetch MCP: Ready for HTTP operations');
        return {
            status: 'connected',
            server: 'fetch',
            capabilities: ['GET', 'POST', 'PUT', 'DELETE']
        };
    }
}

// Initialize MCP demo
const mcpDemo = new MCPDemo();
mcpDemo.demonstrateFileSystem();
mcpDemo.demonstrateFetch();

// Powers demonstration
class PowersDemo {
    constructor() {
        this.installedPowers = [];
        console.log('Powers system: Ready for keyword activation');
    }

    activateByKeyword(keyword) {
        console.log(`Power activated by keyword: "${keyword}"`);
        return {
            keyword: keyword,
            status: 'activated',
            tools: 'loaded'
        };
    }
}

const powersDemo = new PowersDemo();
console.log('Use Powers panel to install and activate powers via keywords');
