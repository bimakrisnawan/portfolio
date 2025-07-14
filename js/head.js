tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#ffd369',
                secondary: '#2b2b3c'
            },
            animation: {
                bubble1: 'float1 10s ease-in-out infinite',
                bubble2: 'float2 12s ease-in-out infinite',
                bubble3: 'float3 14s ease-in-out infinite',
                bubble4: 'float4 11s ease-in-out infinite',
                bubble5: 'float5 13s ease-in-out infinite'
            },
            keyframes: {
                float1: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(40px, -30px)' }
                },
                float2: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(-30px, 40px)' }
                },
                float3: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(20px, 20px)' }
                },
                float4: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(-25px, -35px)' }
                },
                float5: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(35px, 25px)' }
                }
            }
        }
    }
}
// tailwind.config.js
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#ffd369',
                secondary: '#2b2b3c',
                lightBg: '#e0e0e0', // untuk Neumorphism terang
                darkBg: '#2a2b38'   // untuk Neumorphism gelap
            },
            boxShadow: {
                neumorph: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
                neumorphDark: '6px 6px 12px #1c1d25, -6px -6px 12px #343545'
            },
        }
    }
}

function toggleDetail(button) {
    const detailDiv = button.nextElementSibling;
    const isHidden = detailDiv.classList.contains('hidden');
    detailDiv.classList.toggle('hidden');
    button.innerText = isHidden ? "- Show Less" : "+ Show More";
}
